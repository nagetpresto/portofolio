import './App.css';
import './assets/style/style.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    AOS.init();
  })

  return (
    <>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio/2" element={<Portofolio />} />
      </Routes>
    </>
  );
}

export default App;
