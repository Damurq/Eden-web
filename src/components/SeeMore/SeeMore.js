import React            from 'react'
import { Link }         from "react-router-dom"
// Style
import './SeeMore.css'

const SeeMore = ({to}) => {
    
    return (
        <div className="seeMore">
            <div className="line">
            </div>
            <Link to={to} onClick={() => { 
                window.scroll({
                    top: 0,
                    behavior: "smooth"
                });
             }} className="button-dark">ver más</Link>
        </div>
    )
}

export default SeeMore