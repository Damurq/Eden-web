import React from 'react'
import {
    BsInstagram,
} from 'react-icons/bs'

import IconsComponent from '../../../IconsComponent/IconsComponent'
import './PopUpCard.css'

const PopUpCard = ({ icon, children }) => {

    return (
        <div className="card">
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

export default PopUpCard