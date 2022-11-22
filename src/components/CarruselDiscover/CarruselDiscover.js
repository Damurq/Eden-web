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
        <section className="main-carousel">
          <div  className="carousel">
            <Slider
              autoplay
              autoplaySpeed={2000}
              fade
              dots
              initialSlide={2}
              infinite
              customPaging={(i)=>{
                return (
                  <div className="carousel-box" key={(CarouselData2[i].id)}>
                    <div className="box-info">
                        <div className="carousel-image">
                            <img src={(CarouselData2[i].img)}  alt="" style={{width:"60px", height:"80px", objectFit:"cover" , borderRadius:"4px"}} />
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
                <div class="container-main">
                    <div className='row'>
                        <img src={item.img} class="img-main" alt="..." />
                        <div className='container-info2'>
                            <div  className="container-title" >
                                <div>
                                    <img src={item.miniimg}  alt=""  />
                                </div>
                                <div className="mini-text">
                                    <p class="card-text-1 mb-3">{item.text1}</p>
                                    <p class="card-text-2 mb-4">{item.text2}</p>
                                </div>
                                <button className="btn learn-more">mas</button>
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