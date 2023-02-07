import React from 'react'
import "./TournamentInfo.css"

const TournamentInfo = ({ name, description, date, hour, img }) => {
    return (
        <>
            <h2 className="title-tournament-info">
                {name}
            </h2>
            <div className="tournament-info">
                {img && <div className="tournament-info__img">
                    <img src={img} alt={name} />
                </div>}
                <div>
                    <p className="tournament-info__description">
                        {description}
                    </p>
                    <div className="tournament-info-date">
                            {date && (<div className="tournament-info-date__date">
                                <h3>
                                    Fecha
                                </h3>
                                <p>
                                    {date}
                                </p>
                            </div>)}
                            {hour && (<div className="tournament-info-date__time">
                                <h3>
                                    Hora
                                </h3>
                                <p>
                                    {hour}
                                </p>
                            </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TournamentInfo