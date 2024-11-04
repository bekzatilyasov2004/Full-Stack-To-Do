import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { TasksProvider } from './provider/TasksContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider> 
      <TasksProvider>
          <App  />
      </TasksProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
);
