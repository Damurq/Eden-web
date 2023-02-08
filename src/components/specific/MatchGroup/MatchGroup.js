import React from 'react'
import Match from '../Match/Match'
import "./MatchGroup.css"

const MatchGroup = ({ tournament, data }) => {

    return (
        <div className="matchs-container">
            <h2 className="matchs-container__tournament">
                {tournament}
            </h2>
            {data?.length && data?.map((match, index) => {
                return (<div key={`${tournament}-${index}`}>
                    <h2 className="matchs-container__date">
                        {match.date}
                    </h2>
                    <div className="matchs-group">
                        {match?.teams && <Match
                            teams={match.teams}
                            status={match.status}
                            winner={match.winner} />
                        }
                    </div>
                </div>)
            })}
        </div>
    )
}

export default MatchGroup