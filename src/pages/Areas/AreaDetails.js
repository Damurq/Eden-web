import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
//Data
import { CarouselData2 } from '../../data/CarouselData2';
//Estilos
import './AreaDetails.css';
import './Areas';
//icon
import { BsFillInfoCircleFill } from "react-icons/bs";



 const AreaDetails = ({component="undefined"}) => {

    const { area } = useParams();

    const [areas, setAreas] = useState([]);
    const [areasD, setAreasD] = useState([]);
    const [openImage, setOpenImage] = useState(false);
    const [img, setImg] = useState("");

  

    const onOpenImage = (src) => {
        setImg(src)
        setOpenImage(true)
    }

    const getAreaImg = async()=> {
        const response = await fetch('https://medinajosedev.com/api/areas');
        const res = await response.json();

        let compareData = res.data.filter((e) => {
            return e.nombre === area;
        })
        setAreasD(compareData);
    }




    //use effects general
    useEffect(() => {
        getAreaImg();
    }, [area])


  return (
    <div className="Content">
        <div className='Title-Areas'>
            <h2>Area: {area}</h2>
        </div>
        <div>
        {areasD.map((item, index ) => (
        <div key={`${component}-${index}`} className="Details__Area__container" >
                <div className="Details__Area">
                    <div className="Details__cont__img"  onClick={() => onOpenImage(item.imagen_principal)}>
                        {
                            img == '' ?
                            (<img src={item.imagen_principal} alt="" className="Details__img"/>):
                            (<img src={img} alt="" className="Details__img"/>)
                        } 
                    </div>
                </div>
                {/*  Titulo Galería de Imagenes  */}
                <div className='Details__galery'>
                    <div className="Title__Details__Area__Galery">
                        <h2>Explorar fotos </h2>
                    </div>
                </div>

                {/*  Galeria de fotos de Areas  */}
                <div className='Galery__List__Area'>
                    <div className='Galery__List__Area__container'>
                        {
                            item.galeria.length ==  0 ? (
                                <div>
                                    <p> <BsFillInfoCircleFill /> Esta Area no tiene más fotos </p>
                                </div>
                            ):
                            (
                                <div>
                                    {item.galeria.map((sublink, index) => (
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
                            )
                        }
                        

                    </div>         
                </div>


                {/* Imagen abrir */}
                {/* 
                <div className={openImage ? "modelOpen" : "modelClose"}>
                    <div className='onClickImage'>
                        <div className='container_button-close'>
                            <div className='button-close' onClick={() => setOpenImage(false)}>
                                <BsFillXCircleFill style={{color:'black', cursor:'pointer',}}/>
                            </div>
                            </div>
                                <img src={img} alt='' />  
                            </div>
                </div>
                 */}

        </div>                        
        ))}              
        </div>
    </div>
    
  )
}

export default AreaDetails;