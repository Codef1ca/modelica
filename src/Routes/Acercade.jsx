import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Acercatext from "../Components/Acercadecomp";

const Acercade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Acercatext />
    </div>
  );
};

export default Acercade;
