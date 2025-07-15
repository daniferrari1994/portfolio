import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <I18nextProvider i18n={i18n}>
      <App tab="home" />
    </I18nextProvider>
);
} else {
  console.error('No se encontró el elemento con el id "root"');
}
