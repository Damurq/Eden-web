import React from 'react';

//style
import './Philosophy.css';

const Philosophy = () => {

    const imageOne = "./Philosophy/club.png";
    const imageTwo = "./Philosophy/family.png";

    return (
        <div className="philosophy">
                    <h2 className='title'>Sobre nosotros</h2>
            <div className="philosophy__up">
                <div className="philosophy__left">
                    <img src={imageOne} alt="one" />
                </div>
                <div className="philosophy__right">
                    <p>El club tiene mas de 80 años de historia, donde siempre se ha buscado impulsar el deporte y las actividades recreaivas.</p>
                </div>
            </div>
            <div className="philosophy__center">
                <h2>Misión</h2>
                <p>Nuestra misión siempre ha sido alentar el deporte en las generaciones futuras y ofrecer un espacio de recreacion para los distintos miembros.</p>
                <h2>Visión</h2>
            </div>
            <div className="philosophy__down">
                <div className="philosophy__left">
                    <img src={imageTwo} alt="two" />
                </div>
                <div className="philosophy__right">
                    <p>Nuestra visión siempre ha sido alentar el deporte en las generaciones futuras y ofrecer un espacio de recreacion para los distintos miembros.</p>
                </div>
            </div>

            <div className="philosophy__center">
            <h2>¿Qué Ofrecemos?</h2>
                <p>Ofrecemos mas que servicios, ofrecemos tiempo de calidad en familia</p>
       
            </div>

        </div>
    )
}

export default Philosophy