import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SeeMore from '../SeeMore/SeeMore';

import './CarruselActivities.css'
import { ActivityData } from '../../data/Activity';

// Data
import { ACTIVIDADES } from '../../routes/index'

const CarruselActivities = () => {
    const component="Home-Activity";


    const [activities, setActivities] = useState([]);

    const getActivities = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}feed/${ACTIVIDADES}`);
      const res = await response.json();
      setActivities(res.data);
      console.log(res.data);
    }
  
    useEffect(() => {
      getActivities();
    }, [])
  
  



    return(
        
        <>
            <div className="Title-carousel">
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
                  <div className="carousel-box" key={(activities[i].id)} >
                    <div className="box-info">
                        <div className="carousel-imageAct">
                            <img src={(activities[i].imagen_principal)}  alt="" style={{width:"60px", height:"80px", objectFit:"cover" , borderRadius:"10px"}} />
                        </div>
                        <div className="carousel-text">
                            <p  className="">{(activities[i].nombre)}</p>
                        </div>
                    </div>
                  </div>
                )
              }}
              dotsClass="slick-dots custom-indicator"
              >
              {activities.filter((item, idx) => idx < 4).map((item, index) => (
                <div className="container-main" key={`${component}-${index}`}>
                    <div className='row'>
                        <img src={item.imagen_principal} className="img-main" alt="..." />
                        <div className='container-infoEvent'>
                            <div  className="container-title" >
                                <div className="mini-text">
                                    <h1 className="card-text-1 mb-3">{item.nombre}</h1>
                                    { /* p className="card-text-2 mb-4">Tolos los {item.day} a las {item.hour}</p> */}
                                    <p className="card-text-2 mb-4">{item.descripcion}</p>
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