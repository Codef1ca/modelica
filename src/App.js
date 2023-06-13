import "./App.css";
import { link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Acercade from "./Routes/Acercade";
import Home from "./Routes/Home";
import Footer from "./Components/Footer";
import Trabajos from "./Routes/Trabajos";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Acercade />
      <Footer/>
      <Trabajos/>
    </div>
  );
}

export default App;
