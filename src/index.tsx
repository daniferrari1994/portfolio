import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<App tab="home" />);
} else {
  console.error('No se encontró el elemento con el id "app"');
}
