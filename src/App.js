import { useContext, useState } from "react";
import GlobalContext from "./context/context"
import './App.css';
import About from './component/about';
import Home from './component/home';
import Menu from './component/menu/index'
import { Routes,Route } from 'react-router-dom';
import Order from './component/order';
import Contact from './component/contact';
function App() {
  return (
  <>
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>

  </>
  );
}

export default App;
