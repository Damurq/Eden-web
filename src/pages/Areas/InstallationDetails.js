import React, { useEffect, useState } from 'react';
import Glider from 'react-glider';
import { useParams, Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
//Data
import { CarouselData2 } from '../../data/CarouselData2';
//icon
import { BsFillInfoCircleFill } from "react-icons/bs";

import { INSTALACIONES } from '../../routes/index'

const InstallationDetails = () => {

  const { id } = useParams();
  const [installation, setInstallation] = useState([]);
  const [installationD, setInstallationD] = useState([]);
  const [openImage, setOpenImage] = useState(false);
  const [img, setImg] = useState("");

  const onOpenImage = (src) => {
    setImg(src)
    setOpenImage(true)
  }

  const compare = () => {
    let compareData = CarouselData2.filter((e) => {
      return e.title === id;
    })
    setInstallation(compareData);
  }

  const getInstallationImg = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${INSTALACIONES}/${id}`);
    const res = await response.json();
    setInstallationD(res.data);
  }

  //use effects general
  useEffect(() => {
    getInstallationImg();
  }, [id])


  return (
    <div className="Content">
      <div className='Title-Areas'>
        <h2>Instalación: {installationD.nombre || <Skeleton />}</h2>
      </div>
      <div>
        <div className="Details__Area__container" >
          <div className="Details__Area">
            <div className="Details__cont__img" onClick={() => onOpenImage(installationD.imagen_principal)}>
              {img === ''
                ? (<img src={installationD.imagen_principal} alt="" className="Details__img" />)
                : (<img src={img} alt="" className="Details__img" />)
              }
            </div>
          </div>
          {/*  Titulo Galería de Imagenes  */}
          <div className='Details__galery'>
            <div className="Title__Details__Area__Galery">
              <h2>Explorar fotos</h2>
            </div>
          </div>
          {installationD.galeria
            ? installationD.galeria.length === 0
              ? (<div>
                <p> <BsFillInfoCircleFill /> Esta Instalación no tiene más fotos </p>
              </div>)
              : (<div>
                {/*  Galería  de  instalaciones  */}
                <div className='Galery__List__Area'>
                  <div className='Galery__List__Area__container'>
                    {installationD.galeria.map((sublink, index) => (
                      <div key={`ListaAreas-${index}`} className='Galery__List__item'>
                        <div className='Galery__List__Link' onClick={() => onOpenImage(sublink.nameImg)}>
                          <img
                            className='Galery__List__Link__img'
                            alt=''
                            src={sublink.nameImg} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              )
            : <Skeleton />
          }
        </div>
      </div>


      <div className='body-container'>
        {/* ----------- Recursos Disponibles ----------------*/}
        <div className='Installation__main__container' >
          <div className='Installation__cont'>
            {/*  Titulo de Instalaciones  */}
            <div className="Title__carousel__start">
              <h2>Recursos de {installationD.nombre || <Skeleton />} </h2>
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
                      <div className='Installation__Item__Link'>
                        <img
                          className='Installation__Item__img'
                          alt=''
                          src={item.img} />
                        <div className='cards__item__info-two'>
                          <h5 className='cards__item__text-two'>{item.title}</h5>
                        </div>
                      </div>
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