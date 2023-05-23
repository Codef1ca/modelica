import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Benefits from "../Components/Beneficios/benefits";
import Lineas from "../Components/Lineas/lineas";
import Testimonios from "../Components/Testimonios/testimonios";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
        <Navbar/>
        <Hero/>
        <Benefits/>
        <Lineas/>
        <Testimonios/>
        
    </div>
  )
}

export default Home