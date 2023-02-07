import React from 'react'
import './PresentationCard.css';
const PresentationCard = ({ data, orientation }) => {
    const {descripcion, imagen, alt} =data
    return (
        <div className={`presentation__up ${orientation}`}>
            <div className="presentation__content">
                <p>{descripcion}</p>
            </div>
            {imagen && <div className={`presentation__image img--${orientation}`}>
                <img src={imagen} alt={alt} />
            </div>}
        </div>
    )
}

export default PresentationCard