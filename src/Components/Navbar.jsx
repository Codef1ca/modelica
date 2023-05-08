import React, { useState } from "react";
import Logo from "../Assets/Dome-4x1-removebg-preview.png";


const Navbar = () => {
const [isOpen, setIsOpen]=useState(false)

    
  return (
    <div className="nav">
        <div className='nav-logo-container'>
            <img src= {Logo} alt="" className="logo"/>
        </div> 
      <div className={`navbar-links-container ${isOpen && "open"}`}>
            <a href=''className="link-nav">Inicio</a>
            <a href=''className="link-nav">Acerca de</a>
            <a href=''className="link-nav">Servicios</a>
            <a href=''className="link-nav">Trabajos</a>
            <a href=''className="link-nav">Contacto</a>
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