import React from 'react';

//style
import './Presentation.css';


const Presentation = () => {

    const imageOne = "./Presentation/familyPicnic.png";
    const imageTwo = "./Presentation/campingFriends.png";

    return (
        <div className="presentation">

            <div className="presentation__up">
                <div className="presentation__left">
                    <h1>¿Quienes somos?</h1>
                    <p>Apucla es un club que busca promover las actividades recreativas en barquisimeto promoviendo el deporte</p>
                    
                    
                </div>

                <div className="presentation__right">
                    <img src= {imageOne} alt="one"/>
                </div>
            </div>

            <div className="presentation__down">
                <div className="presentation__left">
                    <img src={imageTwo} alt="two"/>
                </div>

                <div className="presentation__right">
                    <p>Apucla es un club que busca promover las actividades recreativas en barquisimeto promoviendo el deporte</p>
            
                </div>

            </div>



        </div>
    )




}

export default Presentation