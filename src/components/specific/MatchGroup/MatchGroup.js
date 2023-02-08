import React from 'react'
import moment from 'moment';

import Match from '../Match/Match'
import "./MatchGroup.css"

const MatchGroup = ({ tournament, data }) => {

    return (
        <div className="matchs-container">
            <h2 className="matchs-container__tournament">
                {tournament}
            </h2>
            {data?.length && data?.map((match, index) => {
                const date = match?.date
                    ? moment(match.date, "DD-MM-YYYY")
                    : null;
                    return (<div key={`${tournament}-${index}`}>
                        <h2 className="matchs-container__date">
                            {date ? date.format('DD-MM-YYYY') : null}
                        </h2>
                        <div className="matchs-group">
                            {match?.teams && <Match
                                teams={match?.teams}
                                status={match?.status}
                                winner={match?.winner}
                            />
                            }
                        </div>
                    </div>)
            })}
        </div>
    )
}

export default MatchGroup