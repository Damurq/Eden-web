import React, { useState, useEffect } from 'react';
import Glider from 'react-glider';
// Componentes
import GalleryAreaItem from "../GalleryAreaItem";
// Styles
import 'glider-js/glider.min.css';
import './GalleryArea.css';
// Data
import { AREAS } from '../../../routes/index'

export const GalleryArea = ({ component = "undefined" }) => {

  const [areas, setAreas] = useState([]);

  const getAreas = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${AREAS}`);
    const res = await response.json();
    setAreas(res);
  }

  useEffect(() => {
    getAreas();
  }, [])


  return (
    <>

      <div className="Title-carousel">
        <h2>Areas de Club</h2>
      </div>

      <div className='Carrusel__Container'>

        <Glider
          draggable
          hasArrows
          scrollLock
          slidesToShow={1}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {areas.data && areas.data.map((item, index) => (
            <GalleryAreaItem
              id={item.id}
              src={item.imagen_principal}
              title={item.nombre}
              text={item.descripcion}
              installation={item.instalaciones}
              key={`${component}-${index}`}
              conditions={component}
              component={'GalleryAreaItem'}
            />

          ))}

        </Glider>
      </div>

    </>
  )
}
