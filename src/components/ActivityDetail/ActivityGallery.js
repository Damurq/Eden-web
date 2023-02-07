import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import '../ActivityDetail/ActivityGallery.css'

import Comment from "../Comment/Comment"
import { ActivityData } from '../../data/Activity'
import { GalleryData } from "../../data/ActivityGallery";

import { EVENTO } from "../../routes/index";
import CommentsActivity from "../Commentary/Commentary";

const Gallery = () => {
    const [activeGallery] = useState(null);

    const param = useParams();
    let id = param.id;

    const [evento, setEvento] = useState([]);

    const getEvento = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${EVENTO}${id}`);
        const res = await response.json();
        setEvento(res.data);
    }

    useEffect(() => {
        getEvento();
    }, [])

    return (

        <div className="Galery">
            {(evento && evento?.nombre) && (<div>
                <div className="Title-carousel">
                    <h3>{evento.nombre}</h3>
                    <hr></hr>
                    <p className="text-detail">Todos los dias en la cancha, no te lo pierdas... </p>
                </div>
                <div className="Carousel-Gallery">
                    {evento?.galeria?.length > 0 ? (evento?.galeria.map(gal => (
                        <Carousel className="Carousel-Gallery" autoPlay interval="5000" transitionTime="500" infiniteLoop style={{ with: '50%' }}>
                            {gal.img_gallery.map((imagen) =>
                                <div key={`${imagen.id_img}-imagen`} className={`"activities-list"${imagen.id_img === activeGallery
                                    ? "active-activity" : ""}`}
                                >
                                    <img src={imagen.url} alt="" style={{ width: "100%", objectFit: "cover", borderRadius: "10px" }} />
                                    <p className="legend">{imagen.description}</p>
                                </div>
                            )}
                        </Carousel>)))
                        : evento?.imagen_principal ? <img src={evento?.imagen_principal} alt={evento?.nombre} style={{width:'80%', marginLeft:'10%'}}/> : null}
                </div>
                <div className="Description">
                    <h2>{evento.descripcion}</h2>
                </div>
                
               { /*<div className="section-commentary">
                    <div className='container-commentary'>
                        <h2>Comentarios:</h2>
                        <CommentsActivity id={evento.id}/>
                    </div>

                    <div className="Comment">
                        <Comment />
                    </div>
                </div>*/}
                
            </div>)}
        </div>

    )

}
export default Gallery