import React from 'react';
import { App } from './App';
import { theme, ScrollbarStyle } from './theme';

import { Header } from './components';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, Flex } from '@chakra-ui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Flex
        direction="column"
        h="100vh"
        w="100vw"
        bg="brand.900"
        overflowY="auto"
        sx={{ ...ScrollbarStyle }}
      >
        <Header />
        <App />
      </Flex>
    </ChakraProvider>
  </React.StrictMode>
);
