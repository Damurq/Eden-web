import React, { useState } from 'react';
import './Commentary.css'
import data from '../../data/comentarios.json'

const CommentsActivity = ()  => {
    const [activeComments] = useState(null)
    console.log(data)
    return (
        
        <div className='container'>
            <div className="comments-container"></div>
                <div className="comments-list">
                    {data.map(commentario => (
                        <div key={`${commentario.id}-activity`} className={`comments-element${commentario.id === activeComments
                            ? "active-activity"
                            : ""}`}
                        > 
                            <div className='detail-comment'>
                                <p className="autor">{commentario.author_name}, {commentario.author_age} años </p>
                                <hr></hr>
                                <p className="comment">{commentario.comment}</p>
                                <p className="date">{commentario.date} a las {commentario.hour}</p>
                            </div>
                            
                        </div>
                    ))} 
                </div>
            </div> 
    )
}

export default CommentsActivity