import React from 'react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import { ParentComponent } from './components/parentComponent';
import theme from './themes/themes';

interface IApp {
  tab?: string;
}

const App: React.FC<IApp> = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <ParentComponent />
    </ChakraBaseProvider>
  );
};

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

export default App;