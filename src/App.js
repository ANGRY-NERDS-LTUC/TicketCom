import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/form/form';
import Header from './components/header/header';
import Home from './components/home/home';
function App() {


  return <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/form" element={ <Form /> }/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
