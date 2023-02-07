import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa"
// Components
import data from "../../data/Events.json"
//
import './EventsCalendar.css'
import moment from 'moment';

import EventDetail from "../EventDetail/EventDetail"

import { EVENTO, EVENTOS } from '../../routes/index';

const getEventos = async (setState, start = null, end = null) => {
    let url = (start && end)
        ? `${process.env.REACT_APP_API_URL}${EVENTO}${start}/${end}`
        : `${process.env.REACT_APP_API_URL}${EVENTOS}`
    const response = await fetch(url);
    const res = await response.json();
    setState(res?.data ? res.data : res);
}

const EventsCalendar = () => {

    const [activeEvent, setActiveEvent] = useState(null)
    const [currentEvents, setCurrentEvents] = useState([]);

    const [values, setValues] = useState({
        start: "",
        end: "",
    });

    useEffect(() => {
        getEventos(setCurrentEvents);
        setValues({
            start: "",
            end: "",
        })
        setActiveEvent(null)
    }, [])

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
            getEventos(setCurrentEvents, values.start, values.end)

        } else {
            alert("Ingresa fechas válidas y asegura que la fecha inicial sea anterior a la final");
        }
    }

    return (
        <div id="CalendarSection" className="CalendarSection section">
            <h2 className="title">{data.Calendar.title}</h2>
            <div className="calendar-header">
                <div className="calendar-container">
                    <h2 className="">Fechas de eventos</h2>
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
                <div className="event-container">
                    <h2 className="">Lista de eventos</h2>
                    <div className="event-list">
                        {currentEvents.map((event) => {
                            let start_date = new Date(event.fecha_inicio)
                            return (
                                <div key={`${event.id}-event`} className={`event-element${event.id === activeEvent
                                    ? " active-event"
                                    : ""}`}
                                    onClick={() => { setActiveEvent(event.id) }}
                                >
                                    <p className="">{event.nombre}</p>

                                    <p className="">{start_date.toLocaleDateString()}</p>
                                </div>
                            )

                        })}

                    </div>
                </div>
            </div>
            <div>
            {(activeEvent !== null) && activeEvent}
            {(activeEvent !== null) && <EventDetail id={activeEvent} />}
            </div>

        </div>
    )
}
export default EventsCalendar;