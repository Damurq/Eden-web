import React, { useState } from 'react'
import data from "../../data/Tournaments.json"
import { weekResults } from '../../data/weekResults'
import MatchGroup from '../../components/MatchGroup/MatchGroup'
import './Results.css'


const Results = () => {
    const sections = Object.keys(data)
    const [activeSection, setActiveSection] = useState(sections.length ? sections[0] : null)

    return (
        <div className="Content">
            <div className="information-elements section">
                {sections && sections.map((section, i) => (
                    <div key={`${data[section].title}-${i}`} className="info-element--container" >
                        <div className={`custom-button info-element ${activeSection === section
                            ? "active-element"
                            : ""
                            }`}
                            id={section}
                            onClick={e => {
                                setActiveSection(e.currentTarget.id)
                            }}>
                            <h2>{data[section].title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            {weekResults
                ? weekResults.map((item) => <MatchGroup
                    tournament={item.tournament}
                    data={item.data} />)
                : ""}
        </div>
    )
}

export default Results