import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductList from './components/ProductLis';
import AdminAddProduct from './components/AdminAddProduc';
import About from './components/AboutUs';
import Home from './components/Home'
import Header from './components/Header1'; 
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';




import './App.css';

const isAdmin = true;

const App = () => {
  return (
    <Router>
      <div>
        <Header isAdmin={isAdmin} /> {/* Use NavBar component */}
        <Routes>
          <Route path="/products" element={<ProductList />} />
          {isAdmin ? (
            <Route path="/admin" element={<AdminAddProduct />} />
          ) : (
            <Route path="*" element={<Navigate to="/products" />} />
          )}
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          
          
        </Routes>
        
      </div>
    </Router>
    
  );
};

export default App;
