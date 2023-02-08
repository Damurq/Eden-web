import React, { useState, useEffect } from 'react';
import PersonalCard from '../../../components/common/cards/PersonalCard/PersonalCard'
// Data
import {DIRECTIVOS} from '../../../routes/index'
import "./Directivos.css"

const Directivos = () => {
    const [directivos, setDirectivos] = useState([])

    const fetchData = async (url) => {
        const response = await fetch(url);
        const res = await response.json();
        console.log(res);
        return res
    }

    const getInfo = async () => {
        const response = await fetchData(`${process.env.REACT_APP_API_URL}${DIRECTIVOS}`);
        setDirectivos(response)
    }

    useEffect(() => {
        getInfo()
    }, [])

    return (<div className="directivos-section">
        {directivos?.length
            ?
            <>
                <h2 className='directivos-title'>Directivos</h2>
                <div className="directivos-container">
                {directivos?.map((direc) => {
                    return (direc?.usuario ?
                    <PersonalCard
                        name={`${direc?.usuario?.nombres} ${direc?.usuario?.apellidos}`}
                        imgSrc={direc?.usuario?.foto}
                        cargo={direc?.usuario?.directivo?.descripcion}
                    />
                    :null)
                })}
                </div>
            </>
            : null}
    </div>
    )
}

export default Directivos