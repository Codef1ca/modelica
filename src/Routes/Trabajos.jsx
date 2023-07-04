import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Trabajoscomp from "../Components/Trabajoscomp";

const Trabajos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Trabajoscomp />
    </div>
  );
};

export default Trabajos;
