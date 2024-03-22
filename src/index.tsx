import { ChakraProvider, Flex } from '@chakra-ui/react';
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
      <Flex direction="column" h="100vh" w="100vw" bg='#4B69FD'>
        <Header />
        <App />
      </Flex>
    </ChakraProvider>
  </React.StrictMode>
);
