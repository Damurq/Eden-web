import React, {useState} from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import '../ActivityDetail/ActivityGallery.css'

import Comment from "../Comment/Comment"
import {ActivityData} from '../../data/Activity'
import { GalleryData } from "../../data/ActivityGallery";
import { CommentsActivity } from "../../data/Comments";

const Gallery = () =>  {
    const [activeComments] = useState(null);
    const [activeGallery] = useState(null);

    const param = useParams();
    let id =param.id;
    console.log('====================================');
    console.log(ActivityData.filter(activity => activity.id === id));
    console.log('====================================');
    return (
        
        <div className="Galery">
        <div>
            {ActivityData.filter(activity => activity.id === id).map(filteredActivity => (
                <div>
                    <div className="Title-carousel">
                        <h3>{filteredActivity.name}</h3>
                        <hr></hr>
                        <p className="text-detail">Todos los {filteredActivity.day} a las {filteredActivity.hour}</p>
                    </div> 

                    <div  className="Carousel-Gallery">
                        {GalleryData.filter(gallery => gallery.id === id).map(gal =>(
                        <Carousel className="Carousel-Gallery" autoPlay interval="5000" transitionTime="500" infiniteLoop style={{with:'50%'}}>
                            {gal.img_gallery.map((imagen)=>
                                <div key={`${imagen.id_img}-imagen`} className={`"activities-list"${imagen.id_img === activeGallery
                                    ? "active-activity"
                                    : ""}`}
                                >
                                    <img src={imagen.url} alt="" style={{width:"100%", objectFit:"cover" , borderRadius:"10px"}}/>
                                    <p className="legend">{imagen.description}</p>
                                      
                                </div>
                                      
                                        
                            )}  
                        </Carousel>
                        ))}
                    </div>

                    <div className="section-commentary">
                        
                        <div className='container-commentary'>
                            <h2>Comentarios:</h2> 
                            {CommentsActivity.filter(commentaries => commentaries.id===id).map((comentary =>
                               <div className="comments-list">
                               {comentary.Comments.map((comment) => (
                                   <div key={`${comment.id}-imagen`} className={`"comments-element"${comment.id === activeComments
                                       ? "active-activity"
                                       : ""}`}
                                   >
                                       <div className='detail-comment'>
                                       <p className="autor">{comment.author_name}, {comment.author_age} años </p>
                                           <hr></hr>
                                           <p className="commentary">{comment.comment}</p>
                                           <p className="date">{comment.date} a las {comment.hour}</p>                                            </div>
                                   </div>
                               ))} 
                           </div> 
                               
                            ))}
                            
                        </div> 

                        <div className="Comment">
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