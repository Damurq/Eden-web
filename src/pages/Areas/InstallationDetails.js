import React, { useEffect, useState } from 'react';
import Glider from 'react-glider';
import { useParams } from "react-router-dom";
//Data
import { CarouselData2 } from '../../data/CarouselData2';

const InstallationDetails = () => {
    
    const { instalacion } = useParams();

    const [installation, setInstallation] = useState([]);
    const [openImage, setOpenImage] = useState(false);
    const [img, setImg] = useState("");



    const onOpenImage = (src) => {
        setImg(src)
        setOpenImage(true)
    }




    const compare = () => {
        let compareData = CarouselData2.filter((e) => {
          return e.title == instalacion;
        })
        setInstallation(compareData);
  }

  //use effects general
  useEffect(() => {
      compare();
      console.log()
  }, [instalacion])


  return (
<div className="Content">

    


    <div className='Title-Areas'>
            <h2>Instalación: {instalacion}</h2>
        </div>
        <div>
        {installation.map((item, index ) => (
        <div key={`InstallationDetails-${index}`} className="Details__Area__container" >

                <div className="Details__Area">
                    <div className="Details__cont__img"  onClick={() => onOpenImage(item.img)}>
                        {
                            img == '' ?
                            (<img src={item.img} alt="" className="Details__img"/>):
                            (<img src={img} alt="" className="Details__img"/>)
                        } 
                    </div>
                </div>

                {/*  Titulo Galería de Imagenes  */}
                <div className='Details__galery'>
                    <div className="Title__Details__Area__Galery">
                        <h2>Explorar fotos</h2>
                    </div>
                </div>

                {/*  Galería  de  instalaciones  */}
                <div className='Galery__List__Area'>
                    <div className='Galery__List__Area__container'>
                        {item.gallery.map((sublink, index) => (
                            <>
                                <div key={`ListaAreas-${index}`}className='Galery__List__item'>
                                    <a className='Galery__List__Link'  onClick={() => onOpenImage(sublink.nameImg)}>
                                            <img 
                                            className='Galery__List__Link__img'
                                            alt=''
                                            src={sublink.nameImg} />
                                    </a>
                                </div>
                                
                            </>
                    ))}

                    </div>         
                </div>

        </div>                        
        ))}              
        </div>

        <div className='body-container'>
            {/* ----------- Recursos Disponibles ----------------*/}
        <div className='Installation__main__container' >
          <div className='Installation__cont'>

             {/*  Titulo de Instalaciones  */}
            <div className="Title__carousel__start">
                <h2>Recursos de {instalacion} </h2>
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
                    <div key={`InstallationDetails-${index}`} className='Installation__Item'>
                      <a className='Installation__Item__Link'>
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
        


      
      </div>

  )
}

export default InstallationDetails