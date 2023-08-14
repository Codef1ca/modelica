import React from "react";
import Navbar from "../Components/Navbar";
import FormContacto from "../Components/FormContacto";
import Map from "../Components/Map";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contactoPage">
      <Navbar />
      <FormContacto estilo={"blanco"} />
      <Map />
      <Footer />
    </div>
  );
};

export default Contacto;
