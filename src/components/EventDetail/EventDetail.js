import React, { useState, useEffect } from 'react';
import './EventDetail.css'
//import data from '../../data/Events.json'
import Comment from '../Comment/Comment'
import CommentsActivity from '../Commentary/Commentary'

import { EVENTO } from '../../routes/index'

const EventDetail = ({ id }) => {
    const [evento, setEvento] = useState(null);

    const getEvento = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${EVENTO}${id}`);
        const res = await response.json();
        setEvento(res?.data ? res.data : res);
    }

    useEffect(() => {
        getEvento();
    }, [id])

    return (
        <div className="Container-section">
            {(evento && evento?.nombre) && <div className='Event-container'>

                <div className="detail">
                    <div className="Title-event">
                        <div className='Name-event'>
                            <h2>{evento.nombre}</h2>
                        </div>
                        <hr></hr>
                        <p className='Description-event'>{evento.descripcion}</p>
                    </div>

                    <div className='ImageEventDetail'>
                        <img src={evento.imagen_principal} alt="juego" />
                    </div>


                    <div className='Detail-event'>
                        <div className='Text1_EventDetail'>
                            <p>
                                Fecha Inicio
                            </p>
                            <h2 >{evento.fecha_inicio}</h2>
                        </div>

                        <div className='Text2_EventDetail'>
                            <p>
                                Ubicación
                            </p>
                            <h2>{evento.name}</h2>
                        </div>

                        <div className='Text3_EventDetail'>
                            <p>
                                Hora
                            </p>
                            <h2>{evento.fecha_inicio}</h2>
                        </div>
                    </div>
                </div>

                { evento?.comentarios?.length && (<div className="section-commentary">
                    <div className="container-commentary">
                        <h2>Comentarios:</h2>
                        <CommentsActivity />
                    </div>
                    <div className="Comment">
                        <Comment />
                    </div>
                </div>) }


            </div>}
        </div>
    );
}

export default EventDetail;
