// Third party
import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa"
import moment from 'moment';
// Components
import TournamentSection from '../TournamentSection/TournamentSection';
// Data
import data from "../../../data/Tournaments.json"
import { TOURNAMET, TOURNAMET_DATE } from '../../../routes/index'
// Style
import './TournamentsCalendar.css'

import PopUpCard from '../TournamentDetail/PopUpCard/PopUpCard'
import TournamentDetail from '../TournamentDetail/TournamentDetail'

const getTournaments = async (discipline, setState, start = null, end = null) => {
    let url = (start && end)
        ? `${process.env.REACT_APP_API_URL}${TOURNAMET_DATE}/${start}/${end}/${discipline}`
        : `${process.env.REACT_APP_API_URL}${TOURNAMET}${discipline}`
    const response = await fetch(url);
    const res = await response.json();
    setState(res?.data ? res.data : res);
}

const TournamentsCalendar = ({ discipline }) => {
    const [currentTournaments, setCurrentTournaments] = useState([])
    const [activetournament, setActivetournament] = useState(null)
    const [values, setValues] = useState({
        start: "",
        end: "",
    });

    useEffect(() => {
        getTournaments(discipline, setCurrentTournaments)
        setValues({
            start: "",
            end: "",
        })
        setActivetournament(null)
    }, [discipline])

    const handleDateChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const searchEvents = (event) => {
        event.preventDefault()
        const start = moment(values.start, "YYYY-MM-DD");
        const end = moment(values.end, "YYYY-MM-DD");
        if (values.start !== null && values.end !== null && start.isBefore(end)) {
            getTournaments(discipline, setCurrentTournaments, values.start, values.end)
        } else {
            alert("Ingresa fechas válidas y asegura que la fecha inicial sea anterior a la final");
        }
    }

    return (
        <div id="CalendarSection" className="CalendarSection section">
            <h2 className="title">{data[discipline].Calendar.title}</h2>
            <div className="calendar-header">
                <div className="calendar-container">
                    <h2 className="">Fechas de torneos</h2>
                    <p>Introduzca el intervalo de fechas en el que desea buscar</p>
                    <div className="search-inputs">
                        <div className="input-box">
                            <input
                                type="date"
                                name="start"
                                id="start"
                                onChange={handleDateChange}
                                value={values.start}
                            />
                            <label htmlFor="start">Fecha de inicio</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="date"
                                name="end"
                                id="end"
                                onChange={handleDateChange}
                                value={values.end}
                            />
                            <label htmlFor="end">Fecha de fin</label>
                        </div>
                        <button className='search-inputs__button' onClick={searchEvents}>
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <div className="tournament-container">
                    <h2>Lista de torneos</h2>
                    <div className="tournament-list">
                        {currentTournaments.map((tournament) => {
                            let start_date = new Date(tournament.fecha_inicio)
                            return (
                                <div key={`${tournament.id}-tournament`} className={`tournament-element${tournament.id === activetournament
                                    ? " active-tournament"
                                    : ""}`}
                                    onClick={() => { setActivetournament(tournament) }}
                                >
                                    <p>{tournament.nombre}</p>
                                    <p>{start_date.toLocaleDateString()}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {(activetournament && activetournament?.id) && <TournamentDetail tounamentData={activetournament} />}
            {/* {activetournament && <div>
                <TournamentSection data={data[discipline].Tornaments[activetournament]} />
            </div>} */}
        </div>
    )
}
export default TournamentsCalendar;