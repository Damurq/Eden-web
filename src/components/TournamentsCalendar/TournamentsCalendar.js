import React, { useState, useEffect } from 'react';
// Components
import data from "../../data/Tournaments.json"
//
import { Calendar } from "react-multi-date-picker"
import './TournamentsCalendar.css'
import TournamentSection from '../TournamentSection/TournamentSection';
import {stringToDate} from "../../utilities/utilsDate"

const TournamentsCalendar = ({discipline}) => {
    const [currentTournaments, setCurrentTournaments] = useState([])
    const [values, setValues] = useState([])
    const [activetournament, setActivetournament] = useState(null)

    useEffect(() => {
        const today = new Date()
        let tournaments = data[discipline].Calendar.tournaments.filter((tournament) => {
            let aux = new Date(tournament.date)
            return aux.getMonth() === today.getMonth() && aux.getFullYear() === today.getFullYear()
        })
        setCurrentTournaments(tournaments)
        setValues(tournaments.map((tournament) => stringToDate(tournament.date)))
        setActivetournament(null)
    }, [discipline])
    
    
    return (
        <div id="CalendarSection" className="CalendarSection section">
            <h2 className="title">{data[discipline].Calendar.title}</h2>
            <div className="calendar-header">
                <div className="calendar-container">
                    <Calendar
                        multiple
                        value={values}
                        onChange={setValues}
                        onMonthChange={(value) => { console.log(value.month, value.year) }}
                    />
                </div>
                <div className="tournament-container">
                    <h2>Lista de torneos</h2>
                    <div className="tournament-list">
                    {currentTournaments.map((tournament) => (
                        <div key={`${tournament.id}-tournament`} className={`tournament-element${tournament.id === activetournament
                            ? " active-tournament"
                            : ""}`}
                        onClick={() => { setActivetournament(tournament.id) }}
                        >
                            <p>{tournament.title}</p>
                            <p>{tournament.date}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            {activetournament && <div>
                <TournamentSection data={data[discipline].Tornaments[activetournament]} />
            </div>}
        </div>
    )
}
export default TournamentsCalendar;