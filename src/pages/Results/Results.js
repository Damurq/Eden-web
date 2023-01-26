import React, { useState } from 'react'
// Components
import MatchGroup from '../../components/specific/MatchGroup/MatchGroup'
// Data
import data from "../../data/Tournaments.json"
import { weekResults } from '../../data/weekResults'
// Styles
import './Results.css'

const Results = () => {
    const sections = Object.keys(data)
    const [activeSection, setActiveSection] = useState(sections.length ? sections[0] : null)

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

            {weekResults[activeSection]
                ? (<div className="results-container">
                    <h2 className="results-container__title">Resultados</h2>
                    {weekResults[activeSection].map((item, index) => <MatchGroup
                        tournament={item.tournament}
                        data={item.data}
                        key={`tournament-${index}`} />)}
                </div>)
                : ""}
        </div>
    )
}

export default Results