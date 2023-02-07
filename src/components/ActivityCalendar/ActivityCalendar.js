import React, { useState, useEffect } from 'react';
import './ActivityCalendar.css'

import SeeMore from '../SeeMore/SeeMore'
import { ACTIVIDADES } from '../../routes/index';



const ActivitiesCalendar = () => {

    const [activeActivity] = useState(null)

    const [actividades, setActividades] = useState([]);

    const getActividades = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${ACTIVIDADES}`);
        const res = await response.json();
        setActividades(res.data);
    }

    useEffect(() => {
        getActividades();
    }, [])

    console.log(actividades)

    return (
        <div className='container'>
            <div className="activities-container">
                <div className="activities-list">
                    {actividades.map((activity) => {
                        let start_date = new Date(activity.fecha_inicio)
                        return (
                            <div key={`${activity.id}-activity`} className={`activity-element${activity.id === activeActivity
                                ? "active-activity"
                                : ""}`}
                            >
                                <div className='img_calendar'>
                                    <img className='img-activity' src={activity.imagen_principal} alt="activity" />
                                </div>
                                <div className='detail-activity'>
                                    <p className="main-title">{activity.nombre}</p>
                                    <hr></hr>
                                    <p className='detail-act'>Fecha: {start_date.toLocaleDateString()}</p>
                                    <p className="location">Lugar: {activity.instalacion.nombre}</p>

                                    <div className='SeeMore-btn'>
                                        <SeeMore to={"/Detalle-actividad/" + activity.id} />
                                    </div>

                                </div>


                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ActivitiesCalendar