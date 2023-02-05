import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
//Data
import { CarouselData2 } from '../../data/CarouselData2';
//Estilos
import './AreaDetails.css';
import './Areas';




 const AreaDetails = ({component="undefined"}) => {

    const { area } = useParams();

    const [areas, setAreas] = useState([]);
    const [openImage, setOpenImage] = useState(false);
    const [img, setImg] = useState("");

    const onOpenImage = (src) => {
        setImg(src)
        setOpenImage(true)
    }

    const compare = () => {
          let compareData = CarouselData2.filter((e) => {
            return e.title == area;
          })
          setAreas(compareData);
    }



    //use effects general
    useEffect(() => {
        compare();
        console.log(area);
    }, [area])


  return (
    <div className="Content">
        <div className='Title-Areas'>
            <h2>Area: {area}</h2>
        </div>
        <div>
        {areas.map((item, index ) => (
        <div key={`${component}-${index}`} className="Details__Area__container" >
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
                        <h2>Explorar fotos </h2>
                    </div>
                </div>

                {/*  Galeria de Areas  */}
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