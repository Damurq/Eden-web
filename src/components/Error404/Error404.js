import React from "react";

import './Error404.css'
import error from '../../assets/Error404/Error404.png'

const Error404 = () =>{
    return(
        <div className="Container_Error404">
            <div className="Error404">
                <img className='' src={error} alt="Error" />
            </div>
        </div>
    )
}

export default Error404