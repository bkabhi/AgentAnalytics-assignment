// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<ProductList/>} />
      <Route path="/products/:id" element={<ProductDetail/>} />
    </Routes>
  );
}

export default App;
