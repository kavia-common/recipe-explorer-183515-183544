import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import SignInScreen from './SignInScreen';

// A tiny hash-based router to avoid adding dependencies.
// Supports: "/" and "/sign-in" as required.
function useHashRoute() {
  const getPath = () => {
    const raw = window.location.hash || '#/';
    try {
      const path = new URL(raw.replace(/^#/, '#'), window.location.href).hash.slice(1);
      return path || '/';
    } catch {
      const h = raw.startsWith('#') ? raw.slice(1) : raw;
      return h || '/';
    }
  };

  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onHashChange = () => setPath(getPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return path;
}

// PUBLIC_INTERFACE
function App() {
  /**
   * PUBLIC_INTERFACE
   * App bootstraps a minimal hash-based router that renders the Sign In screen
   * at "/sign-in" and as the default route "/".
   */
  const route = useHashRoute();

  // Default route mapping
  const element = useMemo(() => {
    switch (route) {
      case '/':
      case '/sign-in':
        return <SignInScreen />;
      default:
        // Fallback to sign-in for unknown routes to satisfy "default route" requirement
        return <SignInScreen />;
    }
  }, [route]);

  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      {element}
    </div>
  );
}

export default App;
