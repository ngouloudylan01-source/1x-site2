import { Component, ErrorInfo, ReactNode } from 'react';

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0c', color: '#fff', fontFamily: 'sans-serif', padding: '2rem' }}>
          <div style={{ maxWidth: 600, textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', color: '#c8102e', marginBottom: '1rem' }}>1X — Erreur de chargement</h1>
            <p style={{ color: '#aaa', marginBottom: '1rem' }}>{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              style={{ padding: '0.75rem 2rem', background: '#c8102e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
