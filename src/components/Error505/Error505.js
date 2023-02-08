import React from 'react';


//style
import './Error505.css';


const Error505 = () => {

    const Error505_image = "./UserMessages/Error505.png";

    
    return(

        <div className='Error505__container'>
            <div className='Error505__container__image'>
                <img src={Error505_image} alt="Error 505"/>
            </div> 
        </div>


    )



}

export default Error505