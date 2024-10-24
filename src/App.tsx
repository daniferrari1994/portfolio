import React from 'react';
import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client';
import { ParentComponent } from './components/parentComponent';

interface IApp {
  tab?: string;
}

const App: React.FC<IApp> = () => {
  return (
    <Provider>
      <ParentComponent />
    </Provider>
  );
};

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

export default App;