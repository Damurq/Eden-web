import React            from 'react'
import IconsComponent   from '../IconsComponent/IconsComponent'
// Style
import './InformationCard.css'

const InformationCard = ({data}) => {
    const {label, icon, info} = data
    return (
        <div className="contact__information">
            <IconsComponent icon={icon} className={`uil contact__icon`}/>
            <div>
                <h3 className="contact__title">{label}</h3>
                <span className="contact__subtitle">{info}</span>
            </div>
        </div>
    )
}

export default InformationCard