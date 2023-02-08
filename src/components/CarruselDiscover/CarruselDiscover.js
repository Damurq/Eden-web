import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
// Styles
import './CarruselDiscover.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Components
import SeeMore from '../SeeMore/SeeMore';
// Data
import { EVENTOS } from '../../routes/index'

const CarruselDiscover = ({ component = "undefined" }) => {

  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${EVENTOS}`);
    const res = await response.json();
    setEvents(res.data);
  }

  useEffect(() => {
    getEvents();
  }, [])

  return (
    <div className="event-section">
      <div className="Title-carousel">
        <h2>Eventos</h2>
      </div>
      <section className="main-carousel">
        <div className="carousel">
          <Slider
            autoplay
            autoplaySpeed={2000}
            fade
            dots
            initialSlide={0}
            infinite
            customPaging={(i) => {
              return (
                <div className="carousel-box" key={(events[i].id)} >
                  <div className="box-info">
                    <div className="carousel-image">
                      <img src={(events[i].imagen_principal)} alt="" style={{ width: "60px", height: "80px", objectFit: "cover", borderRadius: "10px" }} />
                    </div>
                    <div className="carousel-text">
                      <p className="">{(events[i].nombre)}</p>
                    </div>
                  </div>
                </div>
              )
            }}
            dotsClass="slick-dots custom-indicator"
          >
            {events.filter((element, idx) => idx < 4).map((item, index) => (
              <div className="container-main" key={`${component}-${index}`}>
                <div className='row'>
                  <img src={item.imagen_principal} className="img-main" alt="..." />
                  <div className='container-infoEvent'>
                    <div className="container-title" >
                      <div className="mini-text">
                        <h1 className="card-text-1 mb-3">{item.nombre}</h1>
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
      <div className="EventCommentary">
        <SeeMore to={"/Eventos"} />
      </div>
    </div>
  )
}

export default CarruselDiscover