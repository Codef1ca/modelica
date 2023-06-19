import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Benefits from "../Components/Beneficios/benefits";
import Lineas from "../Components/Lineas/lineas";
import Testimonios from "../Components/Testimonios/testimonios";
import Footer from '../Components/Footer';
import FormContacto from '../Components/FormContacto';
import ButtonFixedWpp from '../Components/ButtonFixedWpp';
const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
        <Navbar/>
        <Hero/>
        <ButtonFixedWpp />
        <Benefits/>
        <Lineas/>
        <FormContacto estilo={"blanco"}/>
        <FormContacto estilo={"negro"}/>
        <Testimonios/>
        <Footer/>
    </div>
  )
}

export default Home