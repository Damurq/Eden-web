import React from 'react'
import Slider from "react-slick";
import './SliderSyncing.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarouselData2 } from '../../data/CarouselData2';



//Funciones para los botones NEXT y PREVIUS del Carousel

//Btn Next
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

//Btn Previus
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

const SliderSyncing = ({component="undefined"}) => {

  //Constantes para el carrousel
  const settings = {
    /*dots: true,*/
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 7000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
        <div className="Title-carousel">
          <h2>Areas e instalaciones</h2>
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
                            <img src={(CarouselData2[i].img)}  alt="" style={{width:"60px", height:"60px", objectFit:"cover" , borderRadius:"10px"}} />
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
              {CarouselData2.map((item, index) => (
                <div className="container-main" key={`${component}-${index}`}>
                    <div className='row'>
                        <img src={item.img} className="img-main" alt="..." />
                        <div className='container-info2'>
                            <div  className="container-title" >
                                <div className="mini-text">
                                    <p className="card-text-1 mb-3">{item.text1}</p>
                                    <p className="card-text-2 mb-4">{item.text2}</p>
                                </div>        
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

export default SliderSyncing;
