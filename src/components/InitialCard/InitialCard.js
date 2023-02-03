import React, { useState, useEffect } from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import SocialMedia from "../specific/SocialMedia/SocialMedia"
import socialMedia from "../../data/socialMedia.json"
import './InitialCard.css';

function InitialCard() {
  let imgUrl = './InitialCard/background.png'

  const [data, setData] = useState({})
  const [portadaStyle, setPortadaStyle] = useState({
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#7e7d7d5e"
  })

  useEffect(() => {
    setData({
      imgUrl,
      title: 'El mejor club de Barquisimeto',
      subtitle: 'Disfruta de una experiencia increible en Apucla'
    })
    setPortadaStyle({ ...portadaStyle, backgroundImage: 'url(' + imgUrl + ')' })
  }, [])

  return (
    <div className='portada' style={portadaStyle}>
      <div className='portada-text-container'>
        <sub className='portada-text-container__title'>{data.title || <Skeleton />}</sub>
        <h1 className='portada-text-container__subtitle'>{data.subtitle || <Skeleton />}</h1>
      </div>
      <div className='portada-social-media'>
        <h2 className='portada-social-media__text'>Siguenos-</h2>
        {socialMedia ? <SocialMedia data={socialMedia} componentName="InitialCard" orientation="vertical" /> : <Skeleton />}
      </div>
      <div className='button-container'>
        <button className='portada__button button-action'>
          Explorar
        </button>
      </div>
    </div>
  );
}

export default InitialCard;
