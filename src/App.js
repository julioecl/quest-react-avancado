import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './components/context/theme.context';
import { AppRoutes } from './pages/routes';

function App() {   
  
  return (
    <ThemeProvider>        
      <GlobalStyle />      
      <AppRoutes/>        
    </ThemeProvider>  
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;         
  }
`

