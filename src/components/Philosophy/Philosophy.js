import React, { useState, useEffect } from 'react';
import Directivos from './Directivos/Directivos'
import LoadData from '../LoadData/LoadData'
// Data
import {
    CLUB,
    CLUB_FILOSOFIA,
    CLUB_MISION_EXTRA,
    CLUB_VISION_EXTRA
} from '../../routes/index'
//style
import './Philosophy.css';

const Philosophy = () => {

    const [data, setData] = useState({})
    const [philosophy, setPhilosophy] = useState({})
    const [mision, setMision] = useState({})
    const [vision, setVision] = useState({})

    const fetchData = async (url) => {
        const response = await fetch(url);
        const res = await response.json();
        return res
    }

    const getInfo = async () => {
        const response = await fetchData(`${process.env.REACT_APP_API_URL}${CLUB}`);
        const response_philosophy = await fetchData(`${process.env.REACT_APP_API_URL}${CLUB_FILOSOFIA}`);
        const res_mision = await fetchData(`${process.env.REACT_APP_API_URL}${CLUB_MISION_EXTRA}`);
        const res_vision = await fetchData(`${process.env.REACT_APP_API_URL}${CLUB_VISION_EXTRA}`);
        setData(response)
        setPhilosophy(response_philosophy?.data)
        setMision(res_mision?.data)
        setVision(res_vision?.data)
    }

    useEffect(() => {
        getInfo();
    }, [])

    return (
        <div className="philosophy">
            <h2 className="title" style={{ paddingTop: "4rem", paddingLeft: "5.5rem", marginBottom: "1rem" }}>
                Sobre Nosotros
            </h2>
            {/* Información del club*/}
            {(data && data?.nombre) ? <div className="club">
                <div className="club-text">
                    <div className='philosophy-hr'>
                        <hr></hr>
                    </div>
                    <h2>{data.nombre}</h2>
                    <p>{data.descripcion}</p>
                    <h3>Año de fundación: {data.anno_fundacion}</h3>
                    <h3>Dirección : {data.direccion}</h3>
                </div>
                <div className="club-img">
                    <img src={data.logo} alt="logo" />
                </div>
            </div>: <LoadData />}
            {/* Filosofia*/}
            {(philosophy && philosophy?.descripcion) && <div className="traject">
                <div className="traject-img">
                    <img src={philosophy.imagen} alt={philosophy.alt} />
                </div>
                <div className="traject-text">
                    <div className='philosophy-hr'>
                        <hr></hr>
                    </div>
                    <h2>{philosophy.titulo}</h2>
                    <p>{philosophy.descripcion}</p>
                    {(mision && mision?.descripcion)
                        && <h3>{mision?.descripcion}</h3>}
                </div>
            </div>}
            {/* Frase*/}
            {(vision && vision?.descripcion) && <div className='detail-traject'>
                <p>{vision?.descripcion}</p>
            </div>}
            {/* Misión*/}
            {(data && data?.mision) && <div className={`traject-mission left`}>
                <div className='mission-text'>
                    <div className='philosophy-hr'>
                        <hr></hr>
                    </div>
                    <h2>NUESTRA MISIÓN</h2>
                    <p>{data.mision}</p>
                </div>
                {(mision && mision?.imagen)
                    && <div className={`mission__image img--left`}>
                        <img src={mision.imagen} alt="two" />
                    </div>}

                <div>
                </div>
            </div>}
            {/* Visión*/}
            {(data && data?.vision) && <div className={`traject-vision right`}>
                <div className='vision-text'>
                    <div className='philosophy-hr'>
                        <hr></hr>
                    </div>
                    <h2>NUESTRA VISIÓN</h2>
                    <p>{data.vision}</p>
                </div>
                {(vision && vision?.imagen)
                    && <div className={`mission__image img--left`}>
                        <img src={vision.imagen} alt="two" />
                    </div>}
                <div>
                </div>
            </div>}
            <Directivos />
        </div>
    )
}

export default Philosophy