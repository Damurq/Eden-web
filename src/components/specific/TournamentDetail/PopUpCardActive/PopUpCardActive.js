import React from 'react'
import IconsComponent from '../../../IconsComponent/IconsComponent'
import './PopUpCardActive.css'

const PopUpCardActive = ({ icon, children }) => {

    return (
        <div className="card-active">
            <div className="lines">
            </div>
            <div className="imgBx">
                <IconsComponent icon={icon} className="imgCard-icon" />
            </div>
            <div className="content-card">
                {children}
            </div>
        </div>)
}

export default PopUpCardActive