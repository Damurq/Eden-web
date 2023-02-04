import React, { useState } from 'react'

import MatchNew from '../../components/specific/MatchNew/MatchNew'
import data from "../../data/Tournaments.json"
import { weekMatchNews } from '../../data/weekMatchNews'
import './MatchsNews.css'

const MatchsNews = () => {
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
            <div className="news-container">
                <h2 className="news-container__title">
                    Noticias
                </h2>
                <div className="news-content">
                    {weekMatchNews[activeSection] && weekMatchNews[activeSection].map((item, index) => (
                        <MatchNew type={item.type} info={item.info} key={`news-${index}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MatchsNews