import React from 'react'
import Match from '../Match/Match'

const MatchGroup = ({ tournament, data }) => {
    return (
        <div className="">
            <h2 className="">
                {tournament}
            </h2>
            {data && data.map((matchs, index) => {
                return (
                    <div className="" key={`tournament-${index}-${matchs.date}`}>
                        <h2 className="">
                            {matchs.date}
                        </h2>
                        <div className="">
                            {matchs.games && matchs.games.map((game, i) => {
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