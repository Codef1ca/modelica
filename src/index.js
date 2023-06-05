import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Acercade from "./Routes/Acercade";
import Home from "./Routes/Home";
import Servicios from "./Routes/Servicios";
import Contacto from "./Routes/Contacto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/acercade",
    element: <Acercade />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
