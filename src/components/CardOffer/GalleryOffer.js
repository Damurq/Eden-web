import React, { useState } from 'react';
import ComboServices from './ComboServices';
import './GalleryOffer.css';


const GallerysOffer= () => {
  
   const [serviceG, setService] = React.useState([])

    React.useEffect( () =>{
        infoService() 
      
    }, [])
   
    const infoService = async()=>{
        const data = await fetch('https://medinajosedev.com/api/feed/actividades')   
        const actividades = await data.json() 

        setService(actividades["data"])
        //console.log(maximo)
    }
    
    
    return ( 
    
    <div className='cards-service'>
            <h3 className="title-service">¿Qué Ofrecemos?</h3>
            <ComboServices/>
           
            <div className='first__row-service'>
           
            
                {
                    serviceG.map( item => (
                    <div className='card__one-service' key={item.id} >
                    
                            <img src={item.imagen_principal} alt="image"/>
                            <div className='descripcion-service'>
                                <p >{item.nombre}</p>
                                <sub>Descripción: {item.descripcion}</sub>
                            </div>
                         
                  
                    </div>
                ))
                
                }

             
            </div>

        
    </div>    
    )
}

export default GallerysOffer