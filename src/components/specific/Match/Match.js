import React from 'react'
import "./Match.css"

const Match = ({ teams, status, winner }) => {
    return (
        <div className="match-detail">
            <h2 className="match-detail__teams">
                {`${teams[0]} VS ${teams[1]}`}
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