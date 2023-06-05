import React from "react";
import Navbar from "../Components/Navbar";
import FormContacto from "../Components/FormContacto";
import Map from "../Components/Map";
import Footer from "../Components/Footer";

const Contacto = () => {
  return (
    <div className="contactoPage">
      <Navbar />
      <FormContacto />
      <Map />
      <Footer />
    </div>
  );
};

export default Contacto;
