import React, { useState, useEffect } from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// Data
import { INITIAL_CARD, SOCIAL_MEDIA } from '../../routes/index'
// Components
import SocialMedia from "../specific/SocialMedia/SocialMedia"
import './InitialCard.css';

function InitialCard() {
  const [data, setData] = useState({})
  const [socialMedia, setSocialMedia] = useState([])
  const [portadaStyle, setPortadaStyle] = useState({
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#7e7d7d5e"
  })
  /**
   * Redirect in case of clicking on a tag "a" with href "#"
   * @param {object} e evento
   */
  function clickHandler(e) {
    e.preventDefault();
    // Get the top height of the element
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href) ? document.querySelector(href).offsetTop : 0;
    // Make the element scroll smoothly
    window.scroll({
      top: offsetTop - 50,
      behavior: "smooth"
    });
  }

  const getInfo = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${INITIAL_CARD}`);
    const social = await fetch(`${process.env.REACT_APP_API_URL}${SOCIAL_MEDIA}`);
    const res = await response.json();
    const res_social = await social.json();
    let imgUrl = res.data?.imagen;
    setData(res.data);
    setSocialMedia(res_social)
    if (imgUrl){
      setPortadaStyle({ ...portadaStyle, backgroundImage: 'url(' + imgUrl + ')' })
    }
  }

  useEffect(() => {
    getInfo();
  },[])

  return (
    <div className='portada' style={portadaStyle}>
      {data ? <div className='portada-text-container'>
        <sub className='portada-text-container__title'>{data.titulo || <Skeleton />}</sub>
        <h1 className='portada-text-container__subtitle'>{data.descripcion || <Skeleton />}</h1>
      </div> : <div className='portada-text-container'></div>}
      <div className='portada-social-media'>
        {socialMedia.length
          ? <>
            <h2 className='portada-social-media__text'>Siguenos-</h2>
            <SocialMedia data={socialMedia} componentName="InitialCard" orientation="vertical" />
          </>
          : null
        }
      </div>
      <div className='button-container'>
        <a className='portada__button button-action' href="#presentation" onClick={clickHandler}>
          Explorar
        </a>
      </div>
    </div>
  );
}

export default InitialCard;
