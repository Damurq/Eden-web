import React            from 'react'
// Components
import ContactForm      from '../ContactForm/ContactForm'
import InformationCard  from '../InformationCard/InformationCard'
// Style
import './Torneo.css'

const Torneo = ({data}) => {

    return (
        <div id="Torneo" className="Contact contact section" >
            <center>
            <h2 className="title">Torneos</h2>
            <h1>Participa en los torneos más desafiantes </h1>
            <img class="img-1" src="./Torneo/image 9.png" alt="domino" />
            <img class="img-2" src="./Torneo/image 10.png" alt="bolas" />
            <h1>La mejor experiencia deportiva </h1>

            <div class="paragraphs" >
                
            <p>
              
            <h3>+20</h3>
            <h3>años brindando servicio</h3>
            </p>

            <p class ="paragraphs-2">
            <h3>+1000 </h3>
            <h3>torneos realizados</h3>
            </p>

            <p>
            <h3>3 </h3>
            <h3>canchas deportivas</h3>
            </p>
           
            </div>
            </center>
        </div>
    )
}

export default Torneo