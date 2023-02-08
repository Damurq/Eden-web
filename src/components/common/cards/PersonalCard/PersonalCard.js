import React from 'react'
import './PersonalCard.css'

const PersonalCard = ({ imgSrc, name, cargo }) => {
    return (<div class="card-personal">
        <div className="img-container-personal-photo">
        <img src={imgSrc} alt={name} />
        </div>
        <div class="container-personal">
            <h3>{name}</h3>
            <p>{cargo}</p>
        </div>
    </div>)
}

export default PersonalCard