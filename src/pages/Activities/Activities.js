import React from 'react'
import ActivitiesCalendar from '../../components/ActivityCalendar/ActivityCalendar';

const Activities = () => {
  return (
    <div className="Content" style={{height:"850px"}}>
        <h2 className="title" style={{paddingTop: "4rem", paddingLeft: "5.5rem", marginBottom: "2rem"}}>Calendario de actividades</h2>
        <ActivitiesCalendar/>
    </div>
  )
}

export default Activities;