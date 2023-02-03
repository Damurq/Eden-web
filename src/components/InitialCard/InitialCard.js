import React, { useState } from "react"
import './InitialCard.css';

function InitialCard({data}) {
  let imgUrl = './InitialCard/background.png'
  const portadaStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: 'url(' + imgUrl + ')'
  };

  return (
    <div className='portada' style={portadaStyle}>
      <div className='TextInitialCard'>
        {<sub className='Text1'>El mejor club de Barquisimeto</sub>}
        {<h1 className='Text2'>Disfruta de una experiencia increible en Apucla</h1>}
      </div>
      <div className='Frame29'>
        {<h2 className='Text3'>Siguenos-</h2>}
      </div>
      <div className='button-container'>
      <button className='Group2 button-yellow'>
        Explorar
      </button>
      </div>
    </div>
  );
}

export default InitialCard;
