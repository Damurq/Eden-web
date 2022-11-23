import React, { useState } from 'react';
// Components
import data from "../../data/Events.json"
//
import { Calendar } from "react-multi-date-picker"
import './EventsCalendar.css'
import { stringToDate } from "../../utilities/utilsDate"
import EventDetail from "../EventDetail/EventDetail"
const EventsCalendar = () => {
    const today = new Date()
    const [currentEvents, setCurrentEvents] = useState(data.Calendar.events.filter((event) => {
        let aux = new Date(event.date)
        return aux.getMonth() === today.getMonth() && aux.getFullYear() === today.getFullYear()
    }))
    const [values, setValues] = useState(currentEvents.map((event) => stringToDate(event.date)))
    const [activeEvent, setActiveEvent] = useState(null)
    return (
        <div id="CalendarSection" className="CalendarSection section">
            <h2 className="title">{data.Calendar.title}</h2>
            <div className="calendar-header">
                <div className="calendar-container">
                    <Calendar
                        multiple
                        value={values}
                        onChange={setValues}
                        onMonthChange={(value) => { console.log(value.month, value.year) }}
                    />
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
                                <p className="">{event.title}</p>
                                <p className="">{event.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="">
                <EventDetail />
            </div>
        </div>
    )
}
export default EventsCalendar;