import React from 'react';
import Glider from 'react-glider';
//componentes
import GalleryAreaItem from "./GalleryAreaItem";
//Estilos
import 'glider-js/glider.min.css';
import './GalleryArea.css';
//datos
import { CarouselData2 } from '../../data/CarouselData2';




export const GalleryArea = ({component="undefined"})  => {



  return (
    <>

        <div className="Title-carousel">
          <h2>Areas de Club</h2>
        </div>

    <div className='Carrusel__Container'>
        
        <Glider
                    draggable
                    hasArrows
                    scrollLock
                    slidesToShow={1}
                    slidesToScroll={1}
                    responsive={[
                        {
                          breakpoint: 960,
                          settings: {
                            slidesToShow: 1,
                          },
                        },
                      ]}
                    >
                        {CarouselData2.map((item, index) => (
                            <GalleryAreaItem
                            id={item.id}
                            src={item.img}
                            title={item.title}
                            text={item.text2}
                            key={`${component}-${index}`}
                            component={'GalleryAreaItem'}
                            />
                            
                            ))}
                        
            </Glider>
        </div>
        
    </>
  )
}
