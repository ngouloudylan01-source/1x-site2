// Mini-routeur par hash — léger, sans dépendance.
// Les routes commencent par « #/ » (ex. #/charts, #/lifestyle, #/evenement/2).
// Les ancres classiques (#parcours, #disco…) restent gérées par le navigateur.
import { useEffect, useState } from 'react';

export type Route =
  | { page: 'home' }
  | { page: 'charts' }
  | { page: 'lifestyle' }
  | { page: 'evenement'; id: number };

export function parseRoute(hash: string): Route {
  if (!hash.startsWith('#/')) return { page: 'home' };
  const parts = hash.slice(2).split('/').filter(Boolean);
  if (parts[0] === 'charts') return { page: 'charts' };
  if (parts[0] === 'lifestyle') return { page: 'lifestyle' };
  if (parts[0] === 'evenement' && parts[1] !== undefined) {
    const id = Number(parts[1]);
    if (!Number.isNaN(id)) return { page: 'evenement', id };
  }
  return { page: 'home' };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.hash));

  useEffect(() => {
    const onHash = () => {
      const r = parseRoute(window.location.hash);
      setRoute(r);
      // Nouvelle page → on remonte en haut
      if (window.location.hash.startsWith('#/')) window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Ancre classique après retour sur l'accueil : scroll vers l'élément
  useEffect(() => {
    const h = window.location.hash;
    if (route.page === 'home' && h && !h.startsWith('#/')) {
      const el = document.getElementById(h.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60);
    }
  }, [route]);

  return route;
}

export function navigate(hash: string) {
  window.location.hash = hash;
}
