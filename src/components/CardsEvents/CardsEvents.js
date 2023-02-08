import React, { useEffect, useState } from 'react';
import SeeMore  from '../SeeMore/SeeMore'


//style
import './CardsEvents.css';
// Data
import {EVENTOS} from '../../routes/index'


const CardsEvents = () => {

    
    const [events, setEvents] = useState([]);


    const getEvents = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${EVENTOS}`);
        const res = await response.json();
        setEvents(res.data);
    }

    useEffect(() => {
        getEvents();
    }, [])

    /*console.log(events);*/

    const today = new Date();

    const filteredEvents = events.filter(event => {
    const finishDate = new Date(event.fecha_finalizacion);
    return finishDate <= today;
    });

    return(

        <div className='cards__events__section'>
            <div className='cards__events__title'>
                <h1>Eventos Finalizados</h1>
            </div>
            <div className='cards__events'>

                {filteredEvents.map((card) => {

                    
                    let start_date = new Date(card.fecha_inicio);
                    let finish_date = new Date(card.fecha_finalizacion);

                    return(
                        <div key={`${card.id}-finished-event`} className={`finished-event-element${card.id === filteredEvents
                            ? "finished-event"
                            : ""}`}>
                            <img src={card.imagen_principal} alt={`${card.id}-event`}/>
                            <h2>{card.nombre}</h2>
                            <sub>Fecha de inicio: {start_date.toLocaleDateString()}</sub>
                            <sub>Fecha de finalización: {finish_date.toLocaleDateString()}</sub>
                            <SeeMore to={"/Detalle-evento/" + card.id} />
                            
                        </div>
                    )

                    }
                )

                }
                

            </div>

            
        </div>


    )



}

export default CardsEvents