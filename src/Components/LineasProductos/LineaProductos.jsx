import React from 'react';
import premium1 from "../../Assets/premium1.png"
import premium2 from "../../Assets/premium2.png"
import premium3 from "../../Assets/premium3.png"

const LineaProductos = ({subTitulo, urlImagenes}) => {
    return (
        <div className='divLineaInterior'>
            <div>
                <h2 className='subTitulo'>{subTitulo}</h2>
            </div>
            <div className='divImagenesLinea'>
                {urlImagenes.map(url => 
                <div>
                    <div className='imagenLineaProductos' style={{ backgroundImage: `url(${url[0]})`}}></div>
                    <div className='descImagen'>{url[1]}</div>
                </div>
                    )
                }
            </div>
        </div>
    );
};

export default LineaProductos;