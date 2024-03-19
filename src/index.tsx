import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);