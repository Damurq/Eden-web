import React from 'react'
import './PresentationCard.css';
const PresentationCard = ({ data, orientation = "left" }) => {
    const {description, image, alt} =data
    return (
        <div className={`presentation__up ${orientation}`}>
            <div className="presentation__content">
                <p>{description}</p>
            </div>
            {image && <div className={`presentation__image img--${orientation}`}>
                <img src={image} alt={alt} />
            </div>}
        </div>
    )
}

export default PresentationCard