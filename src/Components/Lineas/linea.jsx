import React, {useState, useEffect} from 'react';

const Linea = ({url, texto}) => {
    /* const estilo = {backgroundImage: \'{url}\'} */
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Obtiene las dimensiones de la imagen
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setImageSize({ width: img.width, height: img.height });
        };
      }, [url]);

    return (
        <div style={{ backgroundImage: `url(${url})`}} className='imagenLinea'>
            <div className='text-overlay'><a className='descLinea' href='./Servicios'>{texto}</a></div>
            
        </div>
    );
};

export default Linea;