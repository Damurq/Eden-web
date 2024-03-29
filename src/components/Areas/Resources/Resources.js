import React from 'react';
import Slider from "react-slick";
import Glider from 'react-glider';

//Estilos y diseño
import './Resources.css'
import 'glider-js/glider.min.css';


//componentes
import ResourcesItem from "../ResourcesItem";

//datos
import { CarouselData2 } from '../../../data/CarouselData2';


export const Resources = ({component="undefined"}) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

  return (
    <div>
      <div>
      <div className="Title-carousel">
          <h6>Recursos disponibles</h6>
        </div>

        {/* */}
        <div className='Carrusel__Resourses__main'>
          <div className='Carrusel__Resourses'>
          <Glider
                    draggable
                    hasDots
                    scrollLock
                    slidesToShow={1}
                    slidesToScroll={1}
                    responsive={[
                        {
                          breakpoint: 960,
                          settings: {
                            slidesToShow: 3,
                          },
                        },
                      ]}
                    >
                        {CarouselData2.map((item, index) => (
                            <ResourcesItem
                            src={item.img}
                            text={item.title}
                            key={`${component}-${index}`}
                            />
                            ))}

            </Glider>
          </div>   
        </div>
      </div> 
    </div>
    
  )
}
