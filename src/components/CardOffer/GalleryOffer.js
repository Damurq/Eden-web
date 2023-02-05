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
           
            <div className='combo'>
                
            <ComboServices/>
            </div>
            <div className='first__row-service'>
              
            
                {
                    serviceG.map( item => (
                    <div className='card__one-service' key={item.id} >
                    
                    
                    <div className='card__two-service'>
                            <div className='card-service-2'>
                            <img src={item.imagen_principal} alt="image"/>
                            </div>
                            <div className='descripcion-service'>
                                <p >{item.nombre}</p>
                                <sub>Descripción: {item.descripcion}</sub>
                             </div>
                         
                    </div>
                    </div>
                ))
                
                }

             
            </div>

        
    </div>    
    )
}

export default GallerysOffer