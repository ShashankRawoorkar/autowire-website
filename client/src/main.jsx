import React from 'react';
import ReactDOM from 'react-dom/client';
import Lenis from 'lenis';
import App from './App.jsx';
import './styles/globals.css';
import './styles/animations.css';

// ─── Lenis smooth scroll ─────────────────────────────────────────────────────
const lenis = new Lenis({
  duration: 0.6,
  easing: (t) => 1 - Math.pow(1 - t, 3),
  smoothWheel: true,
  wheelMultiplier: 1.2,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ─── React mount ─────────────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
