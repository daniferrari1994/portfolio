import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </StrictMode>,
)
