import React, { useState, useEffect } from 'react';
import ComboServices from './ComboServices';
import PaginationServi from './PaginationServi';
import './GalleryOffer.css';
import { OFRECEMOS, FEED } from '../../routes/index'

const GallerysOffer = () => {

    const [serviceG, setService] = useState([])
    const [category, setCategory] = useState(null)
    const [servicePerPage, setServicePerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const totalService = serviceG.length

    const lastIndex = currentPage * servicePerPage
    const firstIndex = lastIndex - servicePerPage

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
        <>
        <div className='combo'>
                <ComboServices select={setCategory} />
            </div>
        <div className='cards-service'>
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
                )).slice(firstIndex,lastIndex)}
            </div>
            
        </div>
       
        <PaginationServi servicePerPage={servicePerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalService ={totalService}/>
     
        </>
    )
}

export default GallerysOffer