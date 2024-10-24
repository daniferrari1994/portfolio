import React from 'react';
import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client';
import { ParentComponent } from './components/parentComponent';
import { LanguageProvider } from './context/languageContext';

interface IApp {
  tab?: string;
}

const App: React.FC<IApp> = () => {
  return (
    <LanguageProvider>
      <Provider>
        <ParentComponent />
      </Provider>
    </LanguageProvider>
  );
};

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

export default App;