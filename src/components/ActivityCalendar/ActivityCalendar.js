import React, { useState } from 'react';
import {ActivityData} from '../../data/Activity'
import './ActivityCalendar.css'

import SeeMore  from '../SeeMore/SeeMore'

//import bailot from '../assets/b1.jpg'



const ActivitiesCalendar= () => {
    const [activeActivity] = useState(null)
    return (
        <div className='container'>
            <div className="activities-container">
                <div className="activities-list">
                    {ActivityData.map((activity) => (
                        <div key={`${activity.id}-activity`} className={`activity-element${activity.id === activeActivity
                            ? "active-activity"
                            : ""}`}
                        >
                            <img className='img-activity' src={activity.imgPresentation} alt="activity" />
                            
                            <div className='detail-activity'>
                                <p className="main-title">{activity.name}</p>
                                <hr></hr>
                                <p className='detail'>Todos los {activity.day} a las {activity.hour}</p>
                                <p className="location">Lugar: {activity.location}</p>

                                <div className='SeeMore-btn'>
                                    <SeeMore to={"/Detalle-actividad/" + activity.id} />
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