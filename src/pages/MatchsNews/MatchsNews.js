import React, {useState} from 'react'
import data from "../../data/Tournaments.json"
import './MatchsNews.css'
const MatchsNews = () => {
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

    </div>
  )
}

export default MatchsNews