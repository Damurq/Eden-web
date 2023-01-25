import React from 'react'
import Match from '../Match/Match'
import "./MatchGroup.css"

const MatchGroup = ({ tournament, data }) => {
    return (
        <div className="matchs-container">
            <h2 className="matchs-container__tournament">
                {tournament}
            </h2>
            {data && data.map((matchs, index) => {
                return (
                    <div key={`tournament-${index}-${matchs.date}`}>
                        <h2 className="matchs-container__date">
                            {matchs.date}
                        </h2>
                        <div className="matchs-group">
                            {matchs.matchs && matchs.matchs.map((game, i) => {
                                return (
                                    <Match
                                        key={`tournament-${index}-${matchs.date}-${i}`}
                                        teams={game.teams}
                                        status={game.status}
                                        winner={game.winner} />)
                            })}
                        </div>
                    </div>)
            })}
        </div>
    )
}

export default MatchGroup