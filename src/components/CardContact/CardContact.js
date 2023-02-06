import React, { useState, useEffect } from "react"
// Components
import ContactForm from '../ContactForm/ContactForm'
import InformationCard from '../InformationCard/InformationCard'
// Data
import { CONTACTO } from '../../routes/index'
// Style
import './CardContact.css'

const CardContact = () => {
    const [data, setData] = useState([])

    const getInfo = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${CONTACTO}`);
        const res = await response.json();
        setData(res);
    }

    useEffect(() => {
        getInfo();
    },)

    return (
        <div id="Contacto" className="Contact contact section" >
            <h2 className="title">Contacto</h2>
            <div className="contact__container">
                <div className='information-contact'>
                    {data.map((data, index) => (
                        <InformationCard data={data} key={`extra-info--contact-${index}-${data.id}`} />
                    ))}
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default CardContact