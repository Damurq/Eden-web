import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './FinishedEventDetail.css';

import Comment from "../Comment/Comment"


// Data
import { EVENTO } from '../../routes/index'

const Gallery = ({ component = "undefined" }) => {

    const { id } = useParams();
    const [finishedEvent, setFinishedEvent] = useState({});


    useEffect(() => {
        const getFinishedEvent = async (id) => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}${EVENTO}${id}`);
            const res = await response.json();
            setFinishedEvent(res.data);
        }

        getFinishedEvent(id);
    }, [id])

    const filteredComments = finishedEvent.comentarios ? finishedEvent.comentarios.filter(comment => {
        const createdCommentDate = new Date(finishedEvent.comentarios.creado);
        const finishEventDate = new Date(finishedEvent.fecha_finalizacion);
        return createdCommentDate >= finishEventDate;
    }) : [];

    return (

        <div className="Gallery-event">
            <div>

                <div>
                    <div className="Title-carousel-event">
                        <h1>{finishedEvent.nombre || ""}</h1>
                    </div>

                    <div className="Carousel-Gallery-event">
                        {(finishedEvent?.galeria?.length) ? <Carousel className="Carousel-Gallery-event" autoPlay interval="5000" transitionTime="500" infiniteLoop style={{ with: '50%' }}>

                            {finishedEvent?.galeria ? finishedEvent.galeria.map((gal) => {

                                return (

                                    <div key={`${gal.id}-imagen`} className={`"events-list"${gal.id}`}>
                                        <img src={gal.imagen} alt="" style={{ width: "100%", objectFit: "cover", borderRadius: "10px" }} />


                                    </div>
                                )

                            }) : <div>Loading...</div>}



                        </Carousel>
                            : (finishedEvent?.imagen_principal) ? (<div className='Content-img'>
                                <img src={finishedEvent?.imagen_principal} alt={finishedEvent?.nombre} />
                            </div>)
                                : null
                        }

                    </div>
                        <div className="">
                            <p>
                            {finishedEvent.descripcion || ""}
                            </p>
                        </div>


                    <div className="container__comentary__section">
                        <div className="comments__section">
                            <div className='comments__title'>
                                <h1>Comentarios</h1>
                            </div>


                            <div className="comments-event-list">

                                {finishedEvent.comentarios ? finishedEvent.comentarios.map((comment) => {

                                    let created_date = new Date(comment.creado);


                                    return (
                                        <div key={`${comment.id}-event`} className={`comments-event-element${comment.id === filteredComments
                                            ? "active-event"
                                            : ""}`}>

                                            <div className='comment__up'>
                                                <div className='comment__user'>
                                                    <h2>
                                                        {comment.nombre}, {comment.edad} años.
                                                    </h2>
                                                </div>
                                                <div className='comment__date'>
                                                    <span>
                                                        {created_date.toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='comment__down'>
                                                <p>
                                                    {comment.comentario}
                                                </p>
                                            </div>


                                        </div>

                                    )
                                }) : <div>Loading...</div>}
                            </div>



                        </div>
                        <div className="do-comment">
                            <Comment />
                        </div>
                    </div>


                </div>

            </div>
        </div>



    )

}
export default Gallery