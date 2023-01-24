import React from 'react'
// Components
// Style
import './Tournament.css'
import SeeMore  from '../SeeMore/SeeMore'

const Tournament = ({ data }) => {

    return (
        <div className="tournament-section" >
            <h2 className="title">Torneos</h2>
            <h2>Participa en los torneos más desafiantes </h2>
            <div className="discipline-container">
                <img src="./Tournament/image 9.png" alt="domino" />
                <img src="./Tournament/image 10.png" alt="bolas" />
            </div>
            <h3>La mejor experiencia deportiva </h3>
            <div className="paragraphs" >
                <div>
                    <p>+20</p>
                    <p>años brindando servicio</p>
                </div>
                <div>
                    <p>+1000 </p>
                    <p>torneos realizados</p>
                </div>
                <div>
                    <p>3 </p>
                    <p>canchas deportivas</p>
                </div>
            </div>
            <SeeMore to="/Torneos" />
        </div>
    )
}

export default Tournament