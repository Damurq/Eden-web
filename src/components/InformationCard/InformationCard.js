import React            from 'react'
import IconsComponent   from '../IconsComponent/IconsComponent'
// Style
import './InformationCard.css'

const InformationCard = ({data}) => {
    const {tipo, contacto} = data
    return (
        <div className="contact__information">
            <IconsComponent icon={tipo.toLowerCase()} className={`uil contact__icon`}/>
            <div>
                <h3 className="contact__title">{tipo}</h3>
                <span className="contact__subtitle">{contacto}</span>
            </div>
        </div>
    )
}

export default InformationCard