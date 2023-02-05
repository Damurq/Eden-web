import React, { useState, useEffect } from 'react';
import Glider from 'react-glider';
//datos
import { CarouselData2 } from '../../data/CarouselData2';
//Estilos y diseño
import './GalleryAreaItem.css';
import './Resources.css';








const GalleryAreaItem = (props) => {

  const [areas, setAreas] = useState([]);

  const obtenerAreas = async() => {

    const dataAreas = await fetch('https://medinajosedev.com/api/areas');
    const are = dataAreas.json();
    setAreas(are);

    console.log(areas);
}


  useEffect(() => {
    obtenerAreas();
}, [])

//console.log(actividades)

  return (
    <>
      <div className='body-container'>

        {/* ----------- Areas ----------------*/}
        <div className='us-container' >

            {/* Info */}
            <div className='us-wrap-Info'>

                  <h1 className='title-basic-start'> 
                    {props.title}
                  </h1>
                  
                <div className='us-text'>
                    <p className='text-basic'>
                        {props.text}
                    </p>
                    <a href={`/AreaDetails/${props.title}`} className=''>
                      <button className='btn-outline'
                          >Ver más
                      </button>
                    </a>
                </div>
            </div>

            {/* Imagen Principal */}
            <a className='us-wrap'>
                <img
                  className='us-img'
                  alt='Sede AgroMax'
                  src={props.src}
                />
            </a>

        </div>

        {/* ----------- Instalaciones Disponibles ----------------*/}
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
                    {CarouselData2.map((item, index) => (
                    <div key={`${props.component}-${index}`} className='Installation__Item'>
                      <a className='Installation__Item__Link' href={`/InstallationDetails/${item.title}`}>
                            <img 
                            className='Installation__Item__img'
                            alt=''
                            src={item.img} />
                        <div className='cards__item__info-two'>
                          <h5 className='cards__item__text-two'>{item.title}</h5>
                        </div>
                      </a>
                    </div>
              ))}

              </Glider>
            </div>         
          </div>

          </div>
        </div>


      
      </div>

    </>
  )
}

export default GalleryAreaItem;

