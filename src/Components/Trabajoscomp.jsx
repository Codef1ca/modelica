import React from 'react'
import LinkWhatsApp from './LineasProductos/LinkWhatsApp'
import Footer from './Footer'

const Trabajoscomp = () => {
  return (
    <div className='container-acerca'>
    <div className='cont-txt-acerca'>
    <h1>Nuestro trabajo</h1>
    <p className="parrafo-acerca">A continuación te invitamos a ver algunos proyectos en base a lineas de productos Hydro</p>
    </div>
    <div className='container-img-trabajos'>
        <div className='trabajos-caja'></div>
        <div className='trabajos-caja2'></div>
        <div className='trabajos-caja3'></div>
        <div className='trabajos-caja4'></div>
        <div className='trabajos-caja5'></div>
        <div className='trabajos-caja6'></div>
        <div className='trabajos-caja7'></div>
        <div className='trabajos-caja8'></div> 
    </div>
    <LinkWhatsApp/>
    <Footer/>
    </div>
  )
}

export default Trabajoscomp