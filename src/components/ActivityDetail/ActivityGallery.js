import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bailot1 from '../../assets/img2/b5.jpg'
import bailot2 from '../../assets/img2/b2.jpg'
import bailot3 from '../../assets/img2/b3.png'
import bailot4 from '../../assets/img2/b4.jpeg'
import bailot5 from '../../assets/img2/b6.jpg'
import '../ActivityDetail/ActivityGallery.css'

import Comment from "../Comment/Comment"
import CommentsActivity from "../CommentsActivity/CommentsActivity";


class Gallery extends React.Component {
    render() {
        return (
            <div className="Galery">
                <div className="Title-carousel">
                    <h2>Bailoterapia</h2>
                    <hr></hr>
                    <p className="text-detail">Todos los Lunes y Viernes a las 5:00 pm</p>
                </div>

                <div className="Carousel-Gallery">
                    <Carousel autoPlay interval="5000" transitionTime="500" infiniteLoop style={{with:'50%'}}>
                        <div>
                            <img src={bailot1} alt="" style={{width:"100%", objectFit:"cover" , borderRadius:"10px"}}/>
                            <p className="legend">Photo 1</p>
                        </div>
                        <div>
                            <img src={bailot2} alt="" style={{width:"100%", objectFit:"cover" , borderRadius:"10px"}}/>
                            <p className="legend">Photo 2</p>
                        </div>
                        <div>
                            <img src={bailot3} alt="" style={{width:"100%", objectFit:"cover" , borderRadius:"10px"}}/>
                            <p className="legend">Photo 3</p>
                        </div>
                        <div>
                            <img src={bailot4} alt="" style={{width:"100%", objectFit:"cover" , borderRadius:"10px"}}/>
                            <p className="legend">Photo 4</p>
                        </div>
                        <div>
                            <img src={bailot5} alt="" style={{width:"100%", objectFit:"cover" , borderRadius:"10px"}}/>
                            <p className="legend">Photo 5</p>
                        </div>
                    </Carousel>
                </div>
                <div className="Comments">
                    <div className="Comment-list">
                        <h2>Comentarios</h2>
                        <CommentsActivity />
                    </div>
                    <div className="Comment">
                        <Comment />
                    </div>
                </div>
                
            </div>
        )
    };
}
export default Gallery