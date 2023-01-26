import React from 'react'
import "./MatchNew.css"

const selectNew = (type, info) => { 
    let element = ""
    let {tournament, date, winner } = info
    let [team1, team2] = info.team
    switch (type) {
        case "end":
            element = `Finalizó el torneo '${tournament}' el '${date}'. El ganador fue el equipo '${winner}' y la final se disputo entre el equipo '${team1}' y '${team2}'.`
            break;
        case "start":
            element = `El '${date}' inició el torneo '${tournament}', con el primer partido entre el equipo '${team1}' y '${team2}', donde el ganador fue el equipo '${winner}'.`
            break
        default:
            break;
    }
    return element
 }

const MatchNew = ({ type, info }) => {

    return (
        <div className="match-new">
            <h2 className="match-new__title">
                {selectNew(type, info)}
            </h2>
        </div>
    )
}

export default MatchNew