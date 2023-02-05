import React, { useState } from 'react';

import './GalleryOffer.css';


const ComboServices= () => {
  
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
    
    <div className='cambo-contenedor'>
           
            <select name='comboSer'>
            
                {
                    serviceG.map( item => (
                        
                        <option key={item.id} value={item.id} >{item.id}</option>
                       
                    
                ))
                
                }
  
            </select>
           

        
    </div>    
    )
}

export default ComboServices