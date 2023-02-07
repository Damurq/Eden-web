import React, { useState, useEffect } from 'react';
import './Commentary.css'
import data from '../../data/comentarios.json'

import { EVENTO } from "../../routes/index";

const CommentsActivity = ({id})  => {

    const [evento, setEvento] = useState([]);

    const getEvento = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${EVENTO}${id}`);
      const res = await response.json();
      setEvento(res.data);
    }
  
    useEffect(() => {
      getEvento();
    }, [])

    console.log(evento)

    const [activeComments] = useState(null)
    return (
        
        <div className='container'>
            <div className="comments-container"></div>
                <div className="comments-list">
                    {data.map(coment => (
                        <div key={`${coment.id}-activity`} className={`comments-element${coment.id === activeComments
                            ? "active-activity"
                            : ""}`}
                        > 
                            <div className='detail-comment'>
                                <p className="autor">{coment.author_name}, {coment.author_age} años </p>
                                <hr></hr>
                                <p className="comment">{coment.comment}</p>
                                <p className="date">{coment.date} a las {coment.hour}</p>
                            </div>
                            
                        </div>
                    ))} 
                </div>
            </div> 
    )
}

export default CommentsActivity