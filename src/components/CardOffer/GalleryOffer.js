import React, { useState } from 'react';
import {ServiciosData} from '../../data/Servicios'
import './GalleryOffer.css'


const GallerysOffer= () => {
    const servicio1 = "./CardsEvents/baseball.png";
      
        const descripcion1 = "Partido de futboll"
    
        const servicio2 = "./CardsEvents/adults.png";
        
        const descripcion2 = "Sesion"
    
    
        const servicio3 = "./CardsEvents/football.png";
        
        const descripcion3 = "Partido amis"
    
    
        const servicio4 = "./CardsEvents/tennis.png";
       
        const descripcion4 = "Torneo de tenis fememino"
    
    
        const servicio5 = "./CardsEvents/playing.png";
       
        const descripcion5 = "Carrera de obstaculos para toda la familia"
    
    
        const servicio6 = "./CardsEvents/camping.png";
        
        const descripcion6 = "Campamento nocturno"
        
    
   
    return ( 
    
    <div className='cards-service'>
            <h2 className="title-service">¿Qué Ofrecemos?</h2>
            <div className='first__row-service'>
       
                <div className='card__one-service'>
       
               
                            <img src={servicio1} alt="one"/>
                            <div className='descripcion-service'>
                                <p >titulo</p>
                                <sub>Descripción: {descripcion1}</sub>
                            </div>
               

                </div>
       
                    <div className='card__two-service'>
                            
                            <img src={servicio2} alt="one"/>
                            
                            <div className='descripcion-service'>
                                <p >hola</p>
                                <sub>{ descripcion2 }</sub>
                    </div>

            </div>
                    <div className='card__three-service'>
                            <img src={servicio3} alt="one"/>
                            <div className='descripcion-service'>
                                <p >titulo</p>
                                <sub>{ descripcion3 }</sub>
                            </div>
                    </div>
       

   </div>
   <div className='second__row-service'>
           <div className='card__one-service'>
           
           <img src={servicio4} alt="one"/>
           
           <div className='descripcion-service'>
           <p >titulo</p>
          <sub>{ descripcion4 }</sub>
          </div>
       </div>
       <div className='card__two-service'>
       <img src={servicio5} alt="one"/>
       <div className='descripcion-service'>
       <p >titulo</p>
          <sub>{ descripcion5 }</sub>
          </div>
       </div>
       <div className='card__three-service'>
       <img src={servicio6} alt="one"/>
       <div className='descripcion-service'>
       <p >titulo</p>
          <sub>{ descripcion6 }</sub>
          </div>
       </div>
   </div>

   
</div>    
    )
}

export default GallerysOffer