import React, { useState, useEffect } from 'react';
import './ActivityCalendar.css'

import SeeMore from '../SeeMore/SeeMore'
import { ACTIVIDADES } from '../../routes/index';



const ActivitiesCalendar = () => {

    const [activeActivity] = useState(null)
    const [actividades, setActividades] = useState([]);
    const [nextPages, setNextPages] = useState(null)

    const getActividades = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${ACTIVIDADES}`);
        const res = await response.json();
        setNextPages(res?.next_page_url)
        setActividades(res?.data);
    }

    const loadMoreData = (e) => {
        if (nextPages){
            fetch(nextPages).then((response) => { 
                response.json().then((res) => { 
                    const datos = Object.values(res?.data)
                    setNextPages(res?.next_page_url)
                    setActividades([...actividades,...datos]);
                 })
             })
        }
    }

    useEffect(() => {
        getActividades();
    }, [])

    return (
        <div className='container'>
            <div className="activities-container">
                <div className="activities-list">
                    {actividades.map((activity) => {
                        let start_date = new Date(activity.fecha_inicio)
                        return (
                            <div key={`${activity?.id}-activity-${activity?.nombre}`} className={`activity-element${activity.id === activeActivity
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
                    {nextPages && <div className="">
                        <button onClick={ loadMoreData }>
                            Cargar más actividades
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ActivitiesCalendar