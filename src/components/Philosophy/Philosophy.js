import React from 'react';

//style
import './Philosophy.css';

const Philosophy = () => {

    const imageOne = "./Philosophy/club.png";
    const imageTwo = "./Philosophy/family.png";
    const orientationMission = "left";
    const orientationVision = "right";

    return (
        <div className="philosophy">
            <h2 className="title" style={{paddingTop: "4rem", paddingLeft: "5.5rem", marginBottom: "1rem"}}>Sobre Nosotros</h2>
            
            <div className="traject">
                              
                <div className="traject-img">
                    <img src={imageOne} alt="one" />
                </div>
                
                <div className="traject-text">
                    <div className='philosophy-hr'>
                      <hr></hr>  
                    </div>
                    <h2>CONÓCENOS</h2>
                    <p>Disfruta de una experiencia increible en Apucla.</p>
                    <h3>El mejor club de barquisimeto</h3>
                </div>  

            </div>

            <div className='detail-traject'>
                <p>"El club tiene más de 80 años de historia y de trayectoría, donde siempre se ha buscado impulsar el deporte y las actividades recreaivas."</p>
            </div>

            <div className={`traject-mission ${orientationMission}`}>

                <div className='mission-text'>

                    <div className='philosophy-hr'>
                      <hr></hr>  
                    </div>

                    <h2>NUESTRA MISIÓN</h2>
                    <p>Nuestra misión es el fomento y la promoción de la práctica deportiva entre todo el mundo y los hábitos saludables. Una práctica deportiva y unos hábitos que mejoren la calidad de vida de las personas y que garanticen el bienestar físico y emocional.</p>
                </div>

                {imageTwo && <div className={`mission__image img--${orientationMission}`}>
                    <img src={imageTwo} alt="two" />
                </div>}

                <div>
                </div>
            </div>
            


            <div className={`traject-vision ${orientationVision}`}>

                <div className='vision-text'>

                    <div className='philosophy-hr'>
                      <hr></hr>  
                    </div>

                    <h2>NUESTRA VISIÓN</h2>
                    <p>Ser una organización innovadora e integradora, reconocida en el ámbito universitario y social, con un equipo de profesionales cualificados y altamente motivados, que prestan un servicio orientado a las necesidades y expectativas de los socias, en sinergia con otras entidades y administraciones deportivas con unas modernas instalaciones, que contribuyen al desarrollo de hábitos deportivos saludables.</p>
                </div>

                {imageTwo && <div className={`vision__image img--${orientationVision}`}>
                    <img src={imageTwo} alt="two" />
                </div>}

                <div>
                </div>
            </div>
            
        </div>
    )
}

export default Philosophy