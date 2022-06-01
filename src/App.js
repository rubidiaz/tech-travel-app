/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/routes';
import GlobalStyle from './styles/global';
import Header from './components/header/header';
import { CartContextProvider } from './context/cartContext'

function App() {
  return (
    <CartContextProvider>
   <BrowserRouter>
   <Header />
    <Routing />
   </BrowserRouter>
   <GlobalStyle />
   </CartContextProvider>
  );
} 



export default App;
