import React, { useEffect, useState } from 'react';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
// Styles
import './AreaDetails.css';
import './Areas';
// Data
import { AREAS } from '../../routes/index'


const AreaDetails = ({ component = "undefined" }) => {

    const { id } = useParams();
    const [area, setArea] = useState({});
    const [openImage, setOpenImage] = useState(false);
    const [img, setImg] = useState("");

    const onOpenImage = (src) => {
        setImg(src)
        setOpenImage(true)
    }

    const getArea = async (id) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${AREAS}/${id}`);
        const res = await response.json();
        setArea(res.data);
    }

    useEffect(() => {
        getArea(id);
    }, [id])


    return (
        <div className="Content">
            <div className='Title-Areas'>
                <h2>Area: {area.nombre || <Skeleton />}</h2>
            </div>
            <div>
                <div className="Details__Area__container" >
                    <div className="Details__Area">
                        <div className="Details__cont__img" onClick={() => onOpenImage(area.imagen_principal)}>
                            {img === ""
                                ? (<img src={area.imagen_principal} alt="" className="Details__img" />)
                                : (<img src={img} alt="" className="Details__img" />)
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
                            {area.galeria
                                ? area.galeria.length === 0
                                    ? (<div>
                                        <p> <BsFillInfoCircleFill /> Esta Area no tiene más fotos </p>
                                    </div>)
                                    : (<div>
                                        {area.galeria.map((sublink, index) => (
                                            <>
                                                <div key={`ListaAreas-${index}`} className='Galery__List__areasD'>
                                                    <div className='Galery__List__Link' onClick={() => onOpenImage(sublink.nameImg)}>
                                                        <img
                                                            className='Galery__List__Link__img'
                                                            alt=''
                                                            src={sublink.nameImg} />
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>)
                                : <Skeleton />
                            }
                        </div>
                    </div>
                    {/* Imagen abrir */}
                    {/* <div className={openImage ? "modelOpen" : "modelClose"}>
                    <div className='onClickImage'>
                        <div className='container_button-close'>
                            <div className='button-close' onClick={() => setOpenImage(false)}>
                                <BsFillXCircleFill style={{color:'black', cursor:'pointer',}}/>
                            </div>
                            </div>
                                <img src={img} alt='' />  
                            </div>
                    </div>*/}
                </div>
            </div>
        </div>

    )
}

export default AreaDetails;