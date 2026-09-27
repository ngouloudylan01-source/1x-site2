#requires -Version 5.1
<##
.SYNOPSIS
    Diagnostic et réparation prudente du Bluetooth sous Windows 10.

.DESCRIPTION
    Vérifie les services Bluetooth, les adaptateurs PnP, les pilotes et les journaux.
    Le script propose ensuite des actions séparées : démarrer les services,
    redémarrer le service principal, activer/désactiver l'adaptateur Bluetooth,
    rescanner les périphériques et ouvrir les réglages Windows.

    Le script doit être lancé en tant qu'administrateur. Il propose automatiquement
    une élévation UAC si nécessaire. Aucune modification n'est faite sans confirmation.

.NOTES
    Compatible avec Windows PowerShell 5.1 / Windows 10.
    Ne désactive pas les services réseau ou Windows Update.
#>

$ErrorActionPreference = 'Continue'

function Test-IsAdministrator {
    $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($identity)
    return $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

if (-not (Test-IsAdministrator)) {
    Write-Host 'Une autorisation administrateur est nécessaire. Ouverture de UAC...' -ForegroundColor Yellow
    $scriptPath = $MyInvocation.MyCommand.Definition
    $arguments = '-NoProfile -ExecutionPolicy Bypass -File "' + $scriptPath + '"'
    Start-Process -FilePath 'powershell.exe' -Verb RunAs -ArgumentList $arguments
    exit
}

$script:ServicePattern = '^(bthserv|BTAGService|BthAvctpSvc|BluetoothUserService(_.*)?|RtkBtManServ|ibtsiva|IntelBluetoothService|DeviceAssociationService)$'
$script:MainBluetoothService = 'bthserv'

function Write-Section {
    param([Parameter(Mandatory = $true)][string]$Title)
    Write-Host "`n=== $Title ===" -ForegroundColor Cyan
}

function Read-YesNo {
    param(
        [Parameter(Mandatory = $true)][string]$Question,
        [bool]$Default = $false
    )

    $suffix = if ($Default) { '[O/n]' } else { '[o/N]' }
    $answer = Read-Host "$Question $suffix"
    if ([string]::IsNullOrWhiteSpace($answer)) { return $Default }
    return $answer.Trim().ToLowerInvariant() -in @('o', 'oui', 'y', 'yes')
}

function Get-BluetoothServices {
    $services = Get-CimInstance -ClassName Win32_Service -ErrorAction SilentlyContinue |
        Where-Object { $_.Name -match $script:ServicePattern -or $_.DisplayName -match '(?i)bluetooth|avctp|audio gateway|realtek bluetooth|intel bluetooth' } |
        Sort-Object Name

    if (-not $services) {
        Write-Host 'Aucun service Bluetooth clairement identifié.' -ForegroundColor Yellow
        return @()
    }

    $services | Select-Object Name, DisplayName, State, StartMode, StartName | Format-Table -AutoSize | Out-Host
    return @($services)
}

function Get-BluetoothDevices {
    $devices = @()

    if (Get-Command Get-PnpDevice -ErrorAction SilentlyContinue) {
        $devices = @(Get-PnpDevice -Class Bluetooth -ErrorAction SilentlyContinue)
        if (-not $devices) {
            $devices = @(Get-PnpDevice -ErrorAction SilentlyContinue |
                Where-Object { $_.Class -match '(?i)bluetooth' -or $_.FriendlyName -match '(?i)bluetooth' })
        }
    }

    if ($devices) {
        $devices |
            Select-Object Status, Problem, FriendlyName, Class, InstanceId |
            Format-Table -Wrap -AutoSize | Out-Host
        return $devices
    }

    Write-Host 'Aucun périphérique Bluetooth détecté par Get-PnpDevice.' -ForegroundColor Yellow
    Write-Host 'Cela peut indiquer un pilote absent, un adaptateur désactivé dans le BIOS ou un dongle non détecté.' -ForegroundColor DarkYellow
    return @()
}

function Get-BluetoothRadioDevices {
    $devices = @(Get-BluetoothDevicesRaw)
    if (-not $devices) { return @() }

    # Les énumérateurs, profils audio et protocoles ne sont pas les radios physiques.
    return @($devices | Where-Object {
        $_.Problem -ne 'CM_PROB_PHANTOM' -and
        $_.FriendlyName -notmatch '(?i)enumerator|RFCOMM|protocol|hands.free|headset|audio'
    })
}

function Get-BluetoothDevicesRaw {
    if (-not (Get-Command Get-PnpDevice -ErrorAction SilentlyContinue)) { return @() }

    $devices = @(Get-PnpDevice -Class Bluetooth -ErrorAction SilentlyContinue)
    if (-not $devices) {
        $devices = @(Get-PnpDevice -ErrorAction SilentlyContinue |
            Where-Object { $_.Class -match '(?i)bluetooth' -or $_.FriendlyName -match '(?i)bluetooth' })
    }
    return $devices
}

function Get-DriverInfo {
    $devices = @(Get-BluetoothDevicesRaw)
    if (-not $devices) { return }

    Write-Host 'Informations de pilote :' -ForegroundColor Gray
    foreach ($device in $devices) {
        $version = $null
        $provider = $null
        try {
            $version = (Get-PnpDeviceProperty -InstanceId $device.InstanceId -KeyName 'DEVPKEY_Device_DriverVersion' -ErrorAction Stop).Data
            $provider = (Get-PnpDeviceProperty -InstanceId $device.InstanceId -KeyName 'DEVPKEY_Device_DriverProvider' -ErrorAction Stop).Data
        } catch {
            # Certaines versions de Windows ne publient pas ces propriétés.
        }

        Write-Host ("  {0}`n    Statut: {1} | Problème: {2}`n    Fournisseur: {3} | Version: {4}" -f `
            $device.FriendlyName, $device.Status, $device.Problem, $provider, $version) -ForegroundColor Gray
    }
}

function Get-BluetoothEventLogs {
    if (-not (Get-Command Get-WinEvent -ErrorAction SilentlyContinue)) { return @() }

    $logs = @(Get-WinEvent -ListLog * -ErrorAction SilentlyContinue |
        Where-Object { $_.LogName -match '(?i)bluetooth' })

    if (-not $logs) {
        Write-Host 'Aucun journal Bluetooth dédié trouvé.' -ForegroundColor Yellow
        return @()
    }

    Write-Host 'Journaux Bluetooth disponibles :' -ForegroundColor Gray
    $logs | Select-Object LogName, IsEnabled, RecordCount | Format-Table -AutoSize | Out-Host

    foreach ($log in ($logs | Where-Object { $_.IsEnabled } | Select-Object -First 3)) {
        Write-Host "`nDerniers événements : $($log.LogName)" -ForegroundColor Gray
        Get-WinEvent -LogName $log.LogName -MaxEvents 5 -ErrorAction SilentlyContinue |
            Select-Object TimeCreated, Id, LevelDisplayName, Message |
            Format-List | Out-Host
    }

    return $logs
}

function Show-Diagnostics {
    Clear-Host
    Write-Host 'DIAGNOSTIC BLUETOOTH WINDOWS 10' -ForegroundColor Green
    Write-Host ('Lancé le : ' + (Get-Date)) -ForegroundColor DarkGray

    Write-Section 'Système'
    Get-CimInstance Win32_OperatingSystem |
        Select-Object Caption, Version, BuildNumber, OSArchitecture |
        Format-List | Out-Host

    Write-Section 'Services Bluetooth'
    $null = Get-BluetoothServices

    Write-Section 'Adaptateurs et périphériques Bluetooth'
    $diagnosticDevices = @(Get-BluetoothDevices)
    $phantomDevices = @($diagnosticDevices | Where-Object { $_.Problem -eq 'CM_PROB_PHANTOM' })
    if ($diagnosticDevices.Count -gt 0 -and $phantomDevices.Count -eq $diagnosticDevices.Count) {
        Write-Host 'CONCLUSION : Windows ne voit actuellement aucun adaptateur Bluetooth présent.' -ForegroundColor Red
        Write-Host 'Les entrées listées sont des restes déconnectés (CM_PROB_PHANTOM). Les services seuls ne peuvent pas réactiver une radio absente.' -ForegroundColor Yellow
    }

    Write-Section 'Pilotes'
    Get-DriverInfo

    Write-Section 'Journaux'
    $null = Get-BluetoothEventLogs

    Write-Section 'Contrôles complémentaires'
    Write-Host 'Page des réglages Bluetooth : ms-settings:bluetooth' -ForegroundColor Gray
    Write-Host 'Rescan matériel : pnputil.exe /scan-devices' -ForegroundColor Gray
    Write-Host 'Activation PnP : Enable-PnpDevice -InstanceId "<ID>" -Confirm:$false' -ForegroundColor Gray
    Write-Host 'Désactivation PnP : Disable-PnpDevice -InstanceId "<ID>" -Confirm:$false' -ForegroundColor Gray
    Write-Host 'Important : le service bthserv actif ne garantit pas que la radio est activée.' -ForegroundColor Yellow
    Write-Host 'Le mode avion, un interrupteur matériel, le BIOS ou le pilote peuvent encore bloquer le Bluetooth.' -ForegroundColor Yellow
}

function Start-BluetoothServices {
    Write-Section 'Démarrage des services Bluetooth'
    $services = @(Get-BluetoothServices)
    if (-not $services) { return }

    foreach ($service in $services) {
        try {
            if ($service.Name -eq $script:MainBluetoothService -and $service.StartMode -ne 'Auto') {
                Set-Service -Name $service.Name -StartupType Automatic -ErrorAction Stop
                Write-Host "$($service.Name) : démarrage automatique configuré." -ForegroundColor Green
            }

            $current = Get-Service -Name $service.Name -ErrorAction SilentlyContinue
            if ($current -and $current.Status -ne 'Running') {
                Start-Service -Name $service.Name -ErrorAction Stop
                Write-Host "$($service.Name) : démarré." -ForegroundColor Green
            } else {
                Write-Host "$($service.Name) : déjà en cours d'exécution." -ForegroundColor Gray
            }
        } catch {
            Write-Host "$($service.Name) : impossible de démarrer — $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

function Restart-BluetoothServices {
    Write-Section 'Redémarrage du service Bluetooth principal'
    $service = Get-Service -Name $script:MainBluetoothService -ErrorAction SilentlyContinue
    if (-not $service) {
        Write-Host 'Le service bthserv est introuvable.' -ForegroundColor Red
        return
    }

    try {
        if ($service.Status -eq 'Running') {
            Restart-Service -Name $script:MainBluetoothService -Force -ErrorAction Stop
        } else {
            Start-Service -Name $script:MainBluetoothService -ErrorAction Stop
        }
        Write-Host 'Le service Bluetooth Support Service est opérationnel.' -ForegroundColor Green
    } catch {
        Write-Host "Échec du redémarrage : $($_.Exception.Message)" -ForegroundColor Red
    }
}

function Enable-BluetoothDevices {
    Write-Section 'Activation des périphériques Bluetooth'
    $devices = @(Get-BluetoothDevicesRaw)
    if (-not $devices) {
        Write-Host 'Aucun périphérique Bluetooth à activer.' -ForegroundColor Yellow
        return
    }

    $disabled = @($devices | Where-Object {
        $_.Problem -ne 'CM_PROB_PHANTOM' -and
        ($_.Status -notmatch '^(OK|Started)$' -or $_.Problem)
    })
    if (-not $disabled) {
        $phantomCount = @($devices | Where-Object { $_.Problem -eq 'CM_PROB_PHANTOM' }).Count
        if ($phantomCount -gt 0) {
            Write-Host 'Aucun adaptateur Bluetooth présent n’est détecté : les entrées trouvées sont fantômes/déconnectées.' -ForegroundColor Red
            Write-Host 'Il faut vérifier le mode avion, la touche radio HP, le BIOS, puis réinstaller le pilote Intel adapté au modèle.' -ForegroundColor Yellow
        } else {
            Write-Host 'Les périphériques Bluetooth semblent déjà actifs.' -ForegroundColor Green
        }
        return
    }

    $disabled | Select-Object Status, Problem, FriendlyName, InstanceId | Format-Table -Wrap -AutoSize | Out-Host
    if (-not (Read-YesNo 'Activer ces périphériques Bluetooth ?' $true)) {
        Write-Host 'Action annulée.' -ForegroundColor Yellow
        return
    }

    foreach ($device in $disabled) {
        try {
            Enable-PnpDevice -InstanceId $device.InstanceId -Confirm:$false -ErrorAction Stop
            Write-Host "$($device.FriendlyName) : activé." -ForegroundColor Green
        } catch {
            Write-Host "$($device.FriendlyName) : échec — $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

function Disable-BluetoothRadio {
    Write-Section 'Désactivation de la radio Bluetooth'
    $devices = @(Get-BluetoothRadioDevices)
    if (-not $devices) {
        Write-Host 'Aucun adaptateur Bluetooth physique identifié.' -ForegroundColor Yellow
        return
    }

    $devices | Select-Object Status, FriendlyName, InstanceId | Format-Table -Wrap -AutoSize | Out-Host
    Write-Host 'Cette action désactive les adaptateurs physiques identifiés, pas seulement le service.' -ForegroundColor Yellow
    if (-not (Read-YesNo 'Continuer ?' $false)) {
        Write-Host 'Action annulée.' -ForegroundColor Yellow
        return
    }

    foreach ($device in $devices) {
        try {
            Disable-PnpDevice -InstanceId $device.InstanceId -Confirm:$false -ErrorAction Stop
            Write-Host "$($device.FriendlyName) : désactivé." -ForegroundColor Green
        } catch {
            Write-Host "$($device.FriendlyName) : échec — $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

function Scan-BluetoothHardware {
    Write-Section 'Rescan du matériel'
    $pnputil = Join-Path $env:windir 'System32\pnputil.exe'
    if (-not (Test-Path $pnputil)) {
        Write-Host 'pnputil.exe est introuvable.' -ForegroundColor Red
        return
    }

    & $pnputil /scan-devices
    Write-Host "`nRescan terminé. Attends quelques secondes puis relance le diagnostic." -ForegroundColor Green
}

function Open-BluetoothSettings {
    Start-Process 'ms-settings:bluetooth'
    Write-Host 'Réglages Bluetooth ouverts.' -ForegroundColor Green
}

function Start-BluetoothTroubleshooter {
    $msdt = Join-Path $env:windir 'System32\msdt.exe'
    if (Test-Path $msdt) {
        Start-Process -FilePath $msdt -ArgumentList '/id BluetoothDiagnostic'
        Write-Host 'Utilitaire de résolution des problèmes lancé.' -ForegroundColor Green
    } else {
        Write-Host 'msdt.exe est indisponible sur cette installation de Windows.' -ForegroundColor Yellow
        Open-BluetoothSettings
    }
}

function Export-BluetoothReport {
    $desktop = [Environment]::GetFolderPath('Desktop')
    $path = Join-Path $desktop ('Bluetooth-rapport-' + (Get-Date -Format 'yyyyMMdd-HHmmss') + '.txt')
    $lines = New-Object System.Collections.Generic.List[string]
    $lines.Add('RAPPORT BLUETOOTH WINDOWS 10')
    $lines.Add(('Date : ' + (Get-Date)))
    $lines.Add('')
    $lines.Add('--- SERVICES ---')
    $lines.Add((@(Get-BluetoothServices) | Format-List | Out-String))
    $lines.Add('--- PERIPHERIQUES ---')
    $lines.Add((@(Get-BluetoothDevicesRaw) | Format-List | Out-String))
    $lines.Add('--- PNPUTIL ENUM-DEVICES ---')
    $pnputil = Join-Path $env:windir 'System32\pnputil.exe'
    if (Test-Path $pnputil) {
        $lines.Add(((& $pnputil /enum-devices /class Bluetooth 2>&1 | Out-String)))
    }
    $lines.Add('--- LOGS DISPONIBLES ---')
    $lines.Add((@(Get-WinEvent -ListLog * -ErrorAction SilentlyContinue | Where-Object { $_.LogName -match '(?i)bluetooth' }) | Format-List | Out-String))

    $lines | Out-File -FilePath $path -Encoding UTF8
    Write-Host "Rapport enregistré ici : $path" -ForegroundColor Green
}

function Show-Menu {
    Write-Host ''
    Write-Host '----------------------------------------' -ForegroundColor DarkGray
    Write-Host ' OUTIL BLUETOOTH WINDOWS 10' -ForegroundColor Cyan
    Write-Host '----------------------------------------' -ForegroundColor DarkGray
    Write-Host '1. Lancer un diagnostic complet'
    Write-Host '2. Démarrer les services Bluetooth'
    Write-Host '3. Redémarrer bthserv'
    Write-Host '4. Activer les périphériques Bluetooth désactivés'
    Write-Host '5. Désactiver les adaptateurs Bluetooth'
    Write-Host '6. Rescanner le matériel'
    Write-Host '7. Ouvrir les réglages Bluetooth Windows'
    Write-Host '8. Lancer le dépanneur Windows'
    Write-Host '9. Exporter un rapport sur le Bureau'
    Write-Host '0. Quitter'
    Write-Host '----------------------------------------' -ForegroundColor DarkGray
}

while ($true) {
    Show-Menu
    $choice = Read-Host 'Choisis une action'
    switch ($choice) {
        '1' { Show-Diagnostics; Read-Host 'Appuie sur Entrée pour continuer' }
        '2' { Start-BluetoothServices; Read-Host 'Appuie sur Entrée pour continuer' }
        '3' { Restart-BluetoothServices; Read-Host 'Appuie sur Entrée pour continuer' }
        '4' { Enable-BluetoothDevices; Read-Host 'Appuie sur Entrée pour continuer' }
        '5' { Disable-BluetoothRadio; Read-Host 'Appuie sur Entrée pour continuer' }
        '6' { Scan-BluetoothHardware; Read-Host 'Appuie sur Entrée pour continuer' }
        '7' { Open-BluetoothSettings; Read-Host 'Appuie sur Entrée pour continuer' }
        '8' { Start-BluetoothTroubleshooter; Read-Host 'Appuie sur Entrée pour continuer' }
        '9' { Export-BluetoothReport; Read-Host 'Appuie sur Entrée pour continuer' }
        '0' { Write-Host 'Fermeture.' -ForegroundColor Gray; break }
        default { Write-Host 'Choix invalide.' -ForegroundColor Yellow }
    }
}
