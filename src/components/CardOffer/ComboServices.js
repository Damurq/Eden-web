import React, { useState, useEffect } from 'react';

import './ComboServices.css';
import { CATEGORIA_EVENTOS } from '../../routes/index'

const ComboServices = ({ select }) => {

    const [serviceCombo, setServiceCombo] = useState([])
    
    const infoService = async () => {
        const data = await fetch(`${process.env.REACT_APP_API_URL}${CATEGORIA_EVENTOS}`)
        const tipos = await data.json()
        setServiceCombo(tipos)
    };

    const handleSelectChange = (event ) => {
        event.preventDefault();
        const option = Number(event.target.value);
        select(option ? option : null);
    };

    useEffect(() => {
        infoService()
    }, [])
    
    return (
        <div className='combo-conteiner'>
            <select name='comboSer' className='select-css' onChange={handleSelectChange}>
                <option value={0} >Seleccionar Categoría</option>
                {serviceCombo.map(item => (
                    <option key={item.id} value={item.id} >{item.nombre}</option>
                ))}
            </select>
        </div>
    )
}

export default ComboServices