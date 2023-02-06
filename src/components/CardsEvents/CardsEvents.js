import React, { useState } from 'react';
import { FinishedEventsData } from '../../data/FinishedEvents'
import SeeMore  from '../SeeMore/SeeMore'


//style
import './CardsEvents.css';


const CardsEvents = () => {

    const [FinishedEvents] = useState(null)
    return(

        <div className='cards__events__section'>
            <div className='cards__events__title'>
                <h1>Eventos Finalizados</h1>
            </div>
            <div className='cards__events'>

                {FinishedEventsData.map((card)=>(
                    <div key={`${card.id}-finished-event`} className={`finished-event-element${card.id === FinishedEvents
                        ? "finished-event"
                        : ""}`}>
                        <img src={card.mainimage} alt={`${card.id}-event`}/>
                        <h2>{card.name}</h2>
                        <sub>Fecha de inicio: {card.startdate}</sub>
                        <sub>Fecha de finalización: {card.finishdate}</sub>
                        <SeeMore to={"/Detalle-evento/" + card.id} />
                        
                    </div>

                ))

                }
                

            </div>

            
        </div>


    )



}

export default CardsEvents