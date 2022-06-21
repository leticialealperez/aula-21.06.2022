import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/GlobalStyles';
import AppRoutes from './routes/AppRoutes';

const temas = {
  dark: {
    color: '#f5f5f5',
    backgroundColor: '#333',
    primary: '#19def0',
  },

  light: {
    color: '#333',
    backgroundColor: '#f5f5f5',
    primary: '#6747b6e9',
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={temas.dark}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
