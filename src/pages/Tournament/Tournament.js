
// Third party
import React, {useState} from 'react'
// Local
import TournamentsCalendar from "../../components/TournamentsCalendar/TournamentsCalendar"
// Data
import data from "../../data/Tournaments.json"
// Styles
import './Tournament.css'

const Tournament = () => {
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
        {activeSection && <TournamentsCalendar discipline={activeSection}/>}
    </div>
  )
}

export default Tournament