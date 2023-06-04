import "./../App.css";
import { useState } from "react";

const FormContacto = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  
  
  return (
    <div class="containerContactForm">
      <div class="contentContactForm">
        <div class="left-content">
          <div className="h1Form">
            <h1>Pedí tu presupuesto</h1>
          </div>
          <div className="cuerpoForm">
            <h2>
              Llena el formulario o llamanos para una consulta a domicilio.
            </h2>
            <p>
              <strong>Zonas de Servicio:</strong>
            </p>
            <p>Salta, Argentina.</p>

            <p>Alejandro Gallardo esq. Av. Juventud, 4400 - Salta, Argentina</p>
            <p>ventas@modelica.com.ar</p>
            <p>+54 9 387 223-8908 /678</p>
          </div>
        </div>

        <div class="right-content">
          <form>
            <div class="form-row">
              <div class="form-group">
                <label className="formLabels" for="nombre">
                  Nombre
                </label>
                <input
                  className="inputForm"
                  type="text"
                  id="nombre"
                  name="nombre"
                  // value={Nombre}
                  // onChange={cambiarNombre}
                />
              </div>
              <div class="form-group">
                <label className="formLabels" for="apellido">
                  Apellido
                </label>
                <input
                  className="inputForm"
                  type="text"
                  id="apellido"
                  name="apellido"
                />
              </div>
            </div>

            <label className="formLabels" for="email">
              Email
            </label>
            <input className="inputForm" type="email" id="email" name="email" />
            <label className="formLabels" for="telefono">
              Teléfono
            </label>
            <input
              className="inputForm"
              type="tel"
              id="telefono"
              name="telefono"
            />
            <label className="formLabels" for="direccion">
              Dirección
            </label>
            <input
              className="inputForm"
              type="text"
              id="direccion"
              name="direccion"
            />
            <label className="formLabels" for="asunto">
              Asunto
            </label>
            <input
              className="inputForm"
              type="text"
              id="asunto"
              name="asunto"
            />
            <label className="formLabels" for="mensaje">
              Escribe tu mensaje aquí...
            </label>
            <textarea
              className="formTextArea"
              name="mensaje"
              id="mensaje"
              rows="4"
            ></textarea>
            <button className="formButtonSubmit" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContacto;
