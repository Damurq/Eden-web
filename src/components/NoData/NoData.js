import React from 'react';


//style
import './NoData.css';


const NoData = () => {

    const NoData_image = "./UserMessages/NohayDatos.png";

    
    return(

        <div className='NoData__container'>
            <div className='NoData__container__image'>
                <img src={NoData_image} alt="No hay Datos"/>
            </div> 
        </div>


    )



}

export default NoData