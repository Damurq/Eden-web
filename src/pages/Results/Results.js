import React, { useState, useEffect } from 'react'
// Components
import MatchGroup from '../../components/specific/MatchGroup/MatchGroup'
// Data
import { TOURNAMET } from '../../routes/index'
import data from "../../data/Tournaments.json"
import {filterResult} from '../../utilities/utils'
// Styles
import './Results.css'

const getTournaments = async (discipline) => {
    let url = `${process.env.REACT_APP_API_URL}${TOURNAMET}${discipline}`
    const response = await fetch(url);
    const res = await response.json();
    return res
}

const Results = () => {
    const sections = Object.keys(data)
    const [activeSection, setActiveSection] = useState(sections.length ? sections[0] : null)
    const [weekResults, setWeekResults] = useState(null)


    useEffect(() => {
        getTournaments(activeSection).then((res) => { 
            let datos = filterResult(res)
            console.log(datos);
            setWeekResults(datos)
        })
    }, [activeSection])
    
    return (
        <div className="Content">
            <div className="information-elements section">
                {sections && sections.map((section, i) => (
                    <div key={`${data[section].title}-${i}`} className="info-element--container" >
                        <div
                            className={`custom-button info-element ${activeSection === section ? "active-element" : ""}`}
                            id={section}
                            onClick={e => {
                                setActiveSection(e.currentTarget.id)
                            }}>
                            <h2>{data[section].title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {(weekResults && weekResults?.length)
                ? (<div className="results-container">
                    <h2 className="results-container__title">Resultados</h2>
                    {weekResults?.map((item, index) => <MatchGroup
                        tournament={item.tournament}
                        data={item.data}
                        key={`tournament-${index}`} />)}
                </div>)
                : ""}
        </div>
    )
}

export default Results