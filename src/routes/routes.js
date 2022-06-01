import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/carts/carts';
import Home from './pages/home/home';


function Routing () {
  return (
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/Cart' element= {<Cart />} />
    </Routes>
    );
}

export default Routing