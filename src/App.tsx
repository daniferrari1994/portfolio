import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from './themes/themes';
import { ParentComponent } from './components/parentComponent';

interface AppProps {
  tab?: string;
}

const App: React.FC<AppProps> = () => {
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