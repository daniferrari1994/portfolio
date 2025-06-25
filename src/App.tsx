import React from 'react';
import { Provider } from "@/components/ui/provider"
import { ParentComponent } from '../src/components/parentComponent';

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

export default App;