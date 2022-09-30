import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPackages from './components/adminPackages/adminPackages';
import Cart from './components/Cart/cart';
import CompanyPackages from './components/companyPackages/companyPackages';
import CreatePackage from './components/createPackage/createPackage';
import Header from './components/header/header';
import Home from './components/home/home';
import Wishlist from './components/Wishlist/wishlist';
import "./App.css";
import { useState } from 'react';

function App() {

  const [background, setBackground] = useState("./components/1968420.jpg");

  return <div style={{backgorund: background }}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/createPackage" element={ <CreatePackage /> }/>
        <Route path="/companyPackages" element={ <CompanyPackages /> }/>
        <Route path="/adminPackages" element={ <AdminPackages /> }/>
        <Route path="/wishlist" element={ <Wishlist /> }/>
        <Route path="/cart" element={ <Cart /> }/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
