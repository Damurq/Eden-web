import React, { useState } from 'react';
import {ActivityData} from '../../data/Activity'
import './ActivityCalendar.css'

import SeeMore  from '../SeeMore/SeeMore'

//import bailot from '../assets/b1.jpg'



const ActivitiesCalendar= () => {
    const [activeActivity] = useState(null)
    return (
        <div className='container'>
            <h2 className="title">Calendario de actividades</h2>
            <div className="activities-container">
                <div className="activities-list">
                    {ActivityData.map((activity) => (
                        <div key={`${activity.id}-activity`} className={`activity-element${activity.id === activeActivity
                            ? "active-activity"
                            : ""}`}
                        >
                            
                            <img className='img-activity' src={activity.url} alt="activity" />
                            
                            <div className='detail-activity'>
                                <p className="main-title">{activity.name}</p>
                                <hr></hr>
                                <p className="text-detail">Todos los {activity.description} a las {activity.hour}</p>
                                <p className="location">Lugar: {activity.Location}</p>
                                <div className='SeeMore'>
                                    <SeeMore to="/ActivityDetail" />
                                </div>
                                
                            </div>
                            
                            
                        </div>
                    ))} 
                </div>
            </div> 
        </div>       
    )
}

export default ActivitiesCalendar