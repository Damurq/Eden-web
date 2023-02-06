import React from 'react';
import Glider from 'react-glider';
import { Link } from 'react-router-dom';
//Estilos y diseño
import './GalleryAreaItem.css';
import '../Resources/Resources.css';

const GalleryAreaItem = (props) => {

  return (
    <>
      <div className='body-container'>
        {/* ----------- Areas ----------------*/}
        <div className='us-container' >
          {/* Imagen Principal */}
          <div className='us-wrap'>
            <img
              className='us-img'
              alt={props.title}
              src={props.src}
            />
          </div>
          {/* Info */}
          <div className='us-wrap-Info'>
            <h1 className='title-basic-start'>
              {[props.title]}
            </h1>
            <div className='us-text'>
              <p className='text-basic'>
                {props.text}
              </p>
              <Link to={`/AreaDetails/${props.id}`} className='btn-outline'>
                Ver más
              </Link>
            </div>
          </div>
        </div>
        {/* ----------- Instalaciones Disponibles ----------------*/}
        {
          props.conditions == "GalleryArea" ? (
            <> 
            <div className='Installation__main__container' >
              <div className='Installation__cont'>
                {/*  Titulo de Instalaciones  */}
                <div className="Title__carousel__start">
                  <h2>Instalaciones</h2>
                </div>
                {/*  Lista  de Instalaciones  */}
                <div className='Installation__List'>
                  <div className='Installation__container'>
                    <Glider
                      draggable
                      hasDots
                      scrollLock
                      slidesToShow={1}
                      slidesToScroll={1}
                      responsive={[
                        {
                          breakpoint: 960,
                          settings: {
                            slidesToShow: 3,
                          },
                        },
                      ]}
                    >
                      {props.installation.map((item, index) => (
                        <div key={`${props.component}-${index}-${item.id}`} className='Installation__Item'>
                          <Link className='Installation__Item__Link' to={`/InstallationDetails/${item.id}`}>
                            <img
                              className='Installation__Item__img'
                              alt={item.nombre}
                              src={item.imagen_principal} />
                            <div className='cards__item__info-two'>
                              <h5 className='cards__item__text-two'>{item.nombre}</h5>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </Glider>
                  </div>
                </div>
              </div>
            </div>
            </>
          ):null
        }
        
      </div>
    </>
  )
}

export default GalleryAreaItem;

