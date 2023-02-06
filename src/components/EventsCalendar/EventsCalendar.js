import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa"
// Components
import { data } from "../../data/Events.js"
//
import './EventsCalendar.css'
import moment from 'moment';

import EventDetail from "../EventDetail/EventDetail"

import {EVENTOS} from '../../routes/index'

const EventsCalendar = () => {

    const [eventos, setEventos] = useState([]);

    const getEventos = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${EVENTOS}`);
        const res = await response.json();
        setEventos(res.data);
    }

    useEffect(() => {
        getEventos();
    }, [])


    const today = new Date()
    const [currentEvents, setCurrentEvents] = useState(data.filter((event) => {
        let aux = new Date(event.date_start)
        return aux.getMonth() === today.getMonth() && aux.getFullYear() === today.getFullYear()
    }))
    const [activeEvent, setActiveEvent] = useState(null)
    const [values, setValues] = useState({
        start: "",
        end: "",
    });

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
            setCurrentEvents(data.filter((item) => {
                const date = moment(item.date_start, "YYYY-MM-DD");
                return date.isSameOrAfter(values["start"]) && date.isSameOrBefore(values["end"]);
            }))

        } else {
            alert("Ingresa fechas válidas y asegura que la fecha inicial sea anterior a la final");
        }
    }

    return (
        <div id="CalendarSection" className="CalendarSection section">
            <h2 className="title">Calendario de eventos</h2>
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
                        {currentEvents.map((event) => (
                            <div key={`${event.id}-event`} className={`event-element${event.id === activeEvent
                                ? " active-event"
                                : ""}`}
                                onClick={() => { setActiveEvent(event.id) }}
                            >
                                <p className="">{event.name}</p>
                                <p className="">{event.date_start}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="">
                {activeEvent && <EventDetail id={activeEvent} />}
            </div>
        </div>
    )
}
export default EventsCalendar;