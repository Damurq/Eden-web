import React from 'react'
import "./Match.css"

const Match = ({ teams, status, winner}) => {
    return (
        <div className="match-detail">
            <h2 className="dfr match-detail__teams">
                {teams[0]?.logo && <div className="logo-container-team">
                    <img src={teams[0]?.logo} alt={teams[0]?.nombre} className="logo-equipo" />
                </div>}
                    {`${teams[0]?.nombre} `}
                   - VS -
                {teams[1]?.logo && <div className="logo-container-team">
                    <img src={teams[1]?.logo} alt={teams[1]?.nombre} className="logo-equipo" />
                </div>}
                    {`${teams[1]?.nombre} `}
            </h2>
            <h3>
                {`Ganador: ${winner}`}
            </h3>
            <p>
                {`${status}`}
            </p>
        </div>
    )
}

export default Match