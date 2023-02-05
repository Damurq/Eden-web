import React from 'react';

//style
import './CardsEvents.css';


const CardsEvents = () => {

    const image1 = "./CardsEvents/baseball.png";
    const date1 = "10/01/2023"
    const title1 = "Partido de baseball infantil"

    const image2 = "./CardsEvents/adults.png";
    const date2 = "5/01/2023"
    const title2 = "Sesion de ejercicios para adultos mayores"


    const image3 = "./CardsEvents/football.png";
    const date3= "20/12/2022"
    const title3 = "Partido amistoso de futbol de fin de año"


    const image4 = "./CardsEvents/tennis.png";
    const date4 = "10/12/2022"
    const title4 = "Torneo de tenis fememino"


    const image5 = "./CardsEvents/playing.png";
    const date5 = "01/12/2022"
    const title5 = "Carrera de obstaculos para toda la familia"


    const image6 = "./CardsEvents/camping.png";
    const date6 = "20/11/2022"
    const title6 = "Campamento nocturno"
    


    return(

        <div className='cards'>
            <div className='first__row'>
                <div className='card__one'>
                    <img src={image1} alt="one"/>
                    <h2>{title1 }</h2>
                    <sub>{ date1 }</sub>
                    <a href="#">Explorar</a>

                </div>
                <div className='card__two'>
                    <img src={image2} alt="one"/>
                    <h2>{title2 }</h2>
                    <sub>{ date2 }</sub>
                    <a href="#">Explorar</a>

                </div>
                <div className='card__three'>
                    <img src={image3} alt="one"/>
                    <h2>{title3 }</h2>
                    <sub>{ date3 }</sub>
                    <a href="#">Explorar</a>

                </div>
                

            </div>
            <div className='second__row'>
                    <div className='card__one'>
                    <img src={image4} alt="one"/>
                    <h2>{title4 }</h2>
                    <sub>{ date4 }</sub>
                    <a href="#">Explorar</a>

                </div>
                <div className='card__two'>
                    <img src={image5} alt="one"/>
                    <h2>{title5}</h2>
                    <sub>{ date5}</sub>
                    <a href="#">Explorar</a>

                </div>
                <div className='card__three'>
                    <img src={image6} alt="one"/>
                    <h2>{title6 }</h2>
                    <sub>{ date6 }</sub>
                    <a href="#">Explorar</a>

                </div>
            </div>

            
        </div>


    )



}

export default CardsEvents