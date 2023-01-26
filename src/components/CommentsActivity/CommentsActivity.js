import React, { useState } from 'react';
import data from '../../data/Comments.json'
import '../CommentsActivity/CommentsActivity.css'

const CommentsActivity= () => {
    const [activeComments] = useState(null)
    return (
        <div className='container'>
            <div className="comments-container">
                <div className="comments-list">
                    {data.map((data) => (
                        <div key={`${data.id}-activity`} className={`comments-element${data.id === activeComments
                            ? "active-activity"
                            : ""}`}
                        > 
                            <div className='detail-comment'>
                                <p className="autor">{data.name}, {data.Age} años </p>
                                <hr></hr>
                                <p className="comment">{data.comment}</p>
                                <p className="date">{data.date} a las {data.hour}</p>
                            </div>
                            
                        </div>
                    ))} 
                </div>
            </div> 
        </div>       
    )
}

export default CommentsActivity