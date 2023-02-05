import './EventDetail.css'
//import data from '../../data/Events.json'
import Comment from '../Comment/Comment'
import CommentsActivity from '../Commentary/Commentary'

import { data } from '../../data/Events'

const EventDetail = ({ id }) => {
    return (
        <div className="Container-section">
            
            {data.filter(event => event.id===id).map(filteredEvent=> (
            <div className='Event-container'>
                <div className="detail">
                    <div className="Title-event">
                        <div className='Name-event'>
                            <h2>{filteredEvent.name}</h2>
                        </div>
                        <hr></hr>
                        <p className='Description-event'>{filteredEvent.description}</p>
                    </div> 

                    <div className='ImageEventDetail'>
                        <img src={filteredEvent.imgPresentation} alt="juego" />
                    </div>

                    
                    <div className='Detail-event'>
                        <div className='Text1_EventDetail'>
                            <p>
                                Fecha
                            </p>
                            <h2 >{filteredEvent.date_start}</h2>
                        </div>

                        <div className='Text2_EventDetail'>
                                <p>
                                    Ubicación
                                </p>
                                <h2>{filteredEvent.location}</h2>
                        </div>

                        <div className='Text3_EventDetail'>
                                <p>
                                    Hora
                                </p>
                                <h2>{filteredEvent.hour}</h2>
                        </div>
                        

                    </div>
                </div>
                <div className="section-commentary">
                    <div className="container-commentary">
                        <h2>Comentarios:</h2> 
                        <CommentsActivity />
                    </div>
                    <div className="Comment">
                        <Comment />
                    </div>
                </div>


            </div>
            
            ))}
            
        </div>
    );
}

export default EventDetail;
