import React, { useState, useEffect } from 'react';
import ComboServices from './ComboServices';
import './GalleryOffer.css';
import { OFRECEMOS, FEED } from '../../routes/index'

const GallerysOffer = () => {

    const [serviceG, setService] = useState([])
    const [category, setCategory] = useState(null)

    const infoService = async (id = null) => {
        const url = id ? `${process.env.REACT_APP_API_URL}${OFRECEMOS}${id}` : `${process.env.REACT_APP_API_URL}${FEED}`
        const data = await fetch(url)
        const actividades = await data.json()
        setService(actividades["data"])
    };

    useEffect(() => {
        infoService(category)
    }, [category])

    return (

        <div className='cards-service'>
            <div className='combo'>
                <ComboServices select={setCategory} />
            </div>
            <div className='first__row-service'>
                {serviceG.map(item => (
                    <div className='card__one-service' key={item.id} >
                        <div className='card__two-service'>
                            <div className='card-service-2'>
                                <img src={item.imagen_principal} alt={item.nombre} />
                            </div>
                            <div className='descripcion-service'>
                                <p >{item.nombre}</p>
                                <sub>Descripción: {item.descripcion}</sub>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GallerysOffer