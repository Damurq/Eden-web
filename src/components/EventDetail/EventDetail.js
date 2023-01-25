import './EventDetail.css'

function EventDetail() {
    const image = "EventDetail/ImageEvent.jpg"
    return (
        <div className="Container-section">
            <div className='Event-container'>

                <h2 className='title Text1_EventDetail'>Juego de futbol</h2>
                <h2 className='Text2_EventDetail'>17-11-2022</h2>
                <div className='Text3_EventDetail'>
                    Te esperamos el 17 de noviembre en el club para hacer
                    el gran partido de futbol entre la Vinotinto y brasil.
                </div>
                <div className='ImageEventDetail'>
                    <img src={image} alt="juego" />
                </div>
                <div className='Frame27'>
                    <h3 className='Text_EventDetail'>
                        <p>
                            Ubicación
                        </p>
                        <p>
                            zona este - cancha de futbol
                        </p>
                    </h3>
                    <h3 className='Text_EventDetail'>
                        <p>
                            Hora
                        </p>
                        <p>
                            13:00 - 15:00
                        </p>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default EventDetail;
