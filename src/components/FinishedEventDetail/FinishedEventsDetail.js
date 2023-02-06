import React, {useState} from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './FinishedEventDetail.css';

import Comment from "../Comment/Comment"
import { FinishedEventsData } from '../../data/FinishedEvents';
import { GalleryData } from "../../data/FinishedEventGallery";
import { CommentsEvent } from "../../data/CommentsEvent";

const Gallery = () =>  {
    const [activeComments] = useState(null);
    const [activeGallery] = useState(null);

    const param = useParams();
    let id = param.id;
    
    FinishedEventsData.filter(event => {
        console.log(event.id)
        return (event.id === id)
    });

    console.log(id);
    
  
    return (
        
        <div className="Gallery-event">
            <div>
                {FinishedEventsData.filter(event => event.id === id).map(filteredEvent => (
                    <div>
                        <div className="Title-carousel-event">
                            <h1>{filteredEvent.name}</h1>
                        </div>

                        <div className="Carousel-Gallery-event">
                            {GalleryData.filter(gallery => gallery.id === id).map(gal => (
                                <Carousel className="Carousel-Gallery-event" autoPlay interval="5000" transitionTime="500" infiniteLoop style={{ with: '50%' }}>
                                    {gal.img_gallery.map((imagen) =>
                                        <div key={`${imagen.id_img}-imagen`} className={`"events-list"${imagen.id_img === activeGallery
                                            ? "active-event"
                                            : ""}`}
                                        >
                                            <img src={imagen.url} alt="" style={{ width: "100%", objectFit: "cover", borderRadius: "10px" }} />
                                            
                                        
                                        </div>
                                        
                                            
                                    )}
                                </Carousel>
                            ))}
                        </div>

                        

                        <div className="container__comentary__section">
                            <div className="comments__section">
                                <div className='comments__title'>
                                    <h1>Comentarios</h1>
                                </div>

                                {CommentsEvent.filter(commentaries => commentaries.id === id).map((comentary =>
                                    <div className="comments-event-list">
                                        {comentary.Comments.map((comment) => (
                                            <div key={`${comment.id}-event`} className={`comments-event-element${comment.id === activeComments
                                                ? "active-event"
                                                : ""}`}
                                            >
                                    
                                                <div className='comment__up'>
                                                    <div className='comment__user'>
                                                        <h2>
                                                            {comment.author_name}, {comment.author_age} años.
                                                        </h2>
                                                    </div>
                                                    <div className='comment__date'>
                                                        <span>
                                                            {comment.date}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='comment__down'>
                                                    <p>
                                                        {comment.comment}
                                                    </p>
                                                </div>
        


                                            </div>
                                        ))}
                                    </div>
                                
                                ))}
                                
                            </div>
                            <div className="do-comment">
                                <Comment />
                            </div>
                        </div>

                        
                    </div>
                ))}
            </div>
        </div>


                        
)
    
}
export default Gallery