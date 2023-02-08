import React from "react";

import './LoasData.css'
import load from '../../assets/LoadData/LoadData.png'

const LoadData = () =>{
    return(
        <div className="Container_LoadData">
            <div className="loadData">
                <img className='' src={load} alt="Load" />
            </div>
        </div>
    )
}

export default LoadData