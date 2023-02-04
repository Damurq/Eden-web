import './EventDetail.css'
import data from '../../data/Events.json'
import Comment from '../Comment/Comment'
import CommentsActivity from '../Commentary/Commentary'

const EventDetail = ({ id }) => {
    const image = "EventDetail/ImageEvent.jpg"
    console.log(id)
    return (
        <div className="Container-section">
            {data.Calendar.events.filter(event => event.id===id).map(filteredEvent=> (
            <div className='Event-container'>

                <h2 className='title Text1_EventDetail'>{filteredEvent.title}</h2>
                <h2 className='Text2_EventDetail'>{filteredEvent.date}</h2>
                <p className='Text3_EventDetail'>{filteredEvent.description}
                </p>
                <div className='ImageEventDetail'>
                    <img src={image} alt="juego" />
                </div>
                <div className='Frame27'>
                    <h3 className='Text_EventDetail'>
                        <p>
                            Ubicación
                        </p>
                        <p>
                            {filteredEvent.location}
                        </p>
                    </h3>
                    <h3 className='Text_EventDetail'>
                        <p>
                            Hora
                        </p>
                        <p>
                            {filteredEvent.hour}
                        </p>
                    </h3>

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
            </div>
            
            ))}
            
        </div>
    );
}

export default EventDetail;
