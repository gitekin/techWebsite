import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import NavBar from "./NavBarComponent/NavBar";
import HomePage from './Components/HomePage';
import BrandsPage from './Components/BrandsPage';
import ProductsPage from './Components/ProductsPage';
import AboutUsPage from './Components/AboutUsPage';
import ProfilePage from './Components/ProfilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
