import React from 'react'
import "Match.css"

const Match = ({ teams, status, winner }) => {
    return (
        <div className="">
            <h2 className="">
                {`${teams[0]} VS ${teams[1]}`}
            </h2>
            <p className="">
                {`${status}`}
            </p>
            <h3 className="">
                {`Ganador: ${winner}`}
            </h3>
        </div>
    )
}

export default Match