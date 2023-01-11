import React from 'react'
import Slider from "react-slick";
import './CarruselDiscover.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarouselData } from '../../data/CarouselData';
import { CarouselData2 } from '../../data/CarouselData2';

const CarruselDiscover = () => {
  return (
    <>
        <div className="Title-carousel">
          <h2>Eventos</h2>
        </div>
        <section className="main-carousel">
          <div  className="carousel">
            <Slider
              autoplay
              autoplaySpeed={2000}
              fade
              dots
              initialSlide={0}
              infinite
              customPaging={(i)=>{
                return (
                  <div className="carousel-box" key={(CarouselData2[i].id)} >
                    <div className="box-info">
                        <div className="carousel-image">
                            <img src={(CarouselData2[i].img)}  alt="" style={{width:"60px", height:"80px", objectFit:"cover" , borderRadius:"10px"}} />
                        </div>
                        <div className="carousel-text">
                            <p  className="">{(CarouselData2[i].title)}</p>
                        </div>
                    </div>
                  </div>
                )
              }}
              dotsClass="slick-dots custom-indicator"
              >
              {CarouselData.map((item) => (
                <div className="container-main">
                    <div className='row'>
                        <img src={item.img} className="img-main" alt="..." />
                        <div className='container-info2'>
                            <div  className="container-title" >
                                <div className="mini-text">
                                    <p className="card-text-1 mb-3">{item.text1}</p>
                                    <p className="card-text-2 mb-4">{item.text2}</p>
                                </div>
                                {/*

                                <a href={item.href}>
                                  <button className="btn">Ver más</button>
                                </a>
                                
                                */}
                                
                            </div>
                        </div>
                        
                    </div>      
                </div>
              ))}
            </Slider>
          </div>

        </section>

    </>
    
  )
}

export default CarruselDiscover