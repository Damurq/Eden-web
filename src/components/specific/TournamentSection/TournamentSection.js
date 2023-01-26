import React from 'react'
import "./TournamentSection.css"

const TournamentSection = ({ data }) => {
  let tableHeader = data ? (data.games.lenth !== 0 ? Object.keys(data.games[0]) : null) : data

  return (
    <>
      {data && (<div className='section'>
        <div className="tournament">
          <h2>{data.title}</h2>
          <h3>{data.date}</h3>
          <p>{data.description}</p>
        </div>
        {tableHeader && <div className="">
          <div className="table-container">
            <table className='game-table'>
              <thead>
                <tr>
                  {tableHeader.map((name, i) => (<th key={`${name}-header-${i}`}>{name}</th>))}
                </tr>
              </thead>
              <tbody>
                {data.games.map((game, index) => {
                  return (<tr key={`${index}-game`}>
                    {tableHeader.map((name, i) => (<td key={`${name}-game-${i}-${index}`}>{game[name]}</td>))}
                  </tr>)
                }
                )}
              </tbody>
            </table>
          </div>
        </div>}
      </div>)}
    </>
  )
}

export default TournamentSection