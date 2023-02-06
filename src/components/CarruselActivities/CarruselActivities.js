import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SeeMore from '../SeeMore/SeeMore';

import './CarruselActivities.css'
import { ActivityData } from '../../data/Activity';

const CarruselActivities = () => {
    const component="Home-Activity";
    return(
        
        <>
            <div className="Title-carouselAct">
                <h2>Actividades</h2>
            </div>

            <section className="main-carouselAct">
          <div  className="carouselAct">
            <Slider
              autoplay
              autoplaySpeed={2000}
              fade
              dots
              initialSlide={0}
              infinite
              customPaging={(i)=>{
                return (
                  <div className="carousel-box" key={(ActivityData[i].id)} >
                    <div className="box-info">
                        <div className="carousel-imageAct">
                            <img src={(ActivityData[i].imgPresentation)}  alt="" style={{width:"60px", height:"80px", objectFit:"cover" , borderRadius:"10px"}} />
                        </div>
                        <div className="carousel-textAct">
                            <p  className="">{(ActivityData[i].name)}</p>
                        </div>
                    </div>
                  </div>
                )
              }}
              dotsClass="slick-dots custom-indicator"
              >
              {ActivityData.map((item, index) => (
                <div className="container-main" key={`${component}-${index}`}>
                    <div className='row'>
                        <img src={item.imgPresentation} className="img-main" alt="..." />
                        <div className='container-info2'>
                            <div  className="container-title" >
                                <div className="mini-text">
                                    <p className="card-text-1 mb-3">{item.name}</p>
                                    <p className="card-text-2 mb-4">Tolos los {item.day} a las {item.hour}</p>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>      
                </div>
              ))}
            </Slider>
          </div>
        
        </section>


            <div className="ActivityCommentary" >
                <SeeMore to={"/Actividades"}/>
            </div>
            
            
        </>
    )
}
export default CarruselActivities;