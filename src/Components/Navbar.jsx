import React, { useState } from "react";
import Logo from "../Assets/Dome-4x1-removebg-preview.png";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Acercade from "../Routes/Acercade";


const Navbar = () => {
const [isOpen, setIsOpen]=useState(false)

    
  return (
    <div className="nav">
        <div className='nav-logo-container'>
            <img src= {Logo} alt="" className="logo"/>
        </div> 
      <div className={`navbar-links-container ${isOpen && "open"}`}>
        <ul className="ul-nav">
          <li className="link-nav"><Link className="li" to="/">Inicio </Link></li>
          <li className="link-nav"><Link className="li" to="/acercade">Acerca de</Link></li>
          <li className="link-nav"><Link className="li" to="/servicios">Servicios</Link></li>
          <li className="link-nav"><Link className="li" to="/trabajos">Trabajos</Link></li>
          <li className="link-nav"><Link className="li" to="/contacto">Contacto</Link></li>
        </ul>
        </div>
  
        
        <div className={`toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)}>
        <span className="span-nav"></span>
        <span className="span-nav"></span>
        <span className="span-nav"></span>

        <body className={isOpen ? 'overlay' : ''}></body>
        </div>
    </div>
  )
}

export default Navbar;