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

    console.log(evento);

    const [activeComments] = useState(null)
    return (
        
        <div className='container'>
            <div className="comments-container"></div>
               <div className="comments-list">
                    {evento?.comentarios?.length > 0 ? (evento?.calendarios.map(comment => (

                    <div>
                        {comment.map(comentario => (

                            <div key={`${comentario.id}-activity`} className={`comments-element${comentario.id === activeComments
                                ? "active-activity"
                                : ""}`}
                            > 
                                <div className='detail-comment'>
                                    <p className="autor">{comentario.nombre}, {comentario.edad} años </p>
                                    <hr></hr>
                                    <p className="comment">{comentario.commentario}</p>
                                    <p className="date">{comentario.nombre} a las {comentario.edad}</p>
                                </div>
                                
                            </div>
                            
                        ))}
                    </div>

                    )))
                    : evento?.comentarios ? <h2 className='Sin_comentarios'>No hay comentarios...</h2> : null}
                </div>     
            </div> 
    )
}

export default CommentsActivity