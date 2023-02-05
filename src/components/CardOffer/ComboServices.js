import React, { useState } from 'react';

import './ComboServices.css';


const ComboServices= () => {
  
   const [serviceCombo, setServiceCombo] = React.useState([])

    React.useEffect( () =>{
        infoService() 
      
    }, [])
   
    const infoService = async()=>{
        const data = await fetch('https://medinajosedev.com/api/feed/tiposdeevento')   
        const tipos = await data.json() 

        setServiceCombo(tipos)
        console.log(tipos)
    }
    
    const handleSelectChange = ( event ) => {
        event.preventDefault();
        console.log(event.target.value);
        //console.log(event.value);
        //this.setState(event.value);
    }
    return ( 
    
    <div className='combo-conteiner'>
           
            <select name='comboSer' className='select-css' onChange = { handleSelectChange }>
            <option value={0} >Seleccionar Categoría</option>
            
                {
                    serviceCombo.map( item => (
                        
                        <option key={item.id} value={item.id} >{item.nombre}</option>
                       
                    
                ))
                
                }
  
            </select>
           

        
    </div>    
    )
}

export default ComboServices