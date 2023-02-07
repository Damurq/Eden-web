import React, { useState, useEffect } from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// Data
import {
    PREVIEW_TORUNAMENT_1,
    PREVIEW_TORUNAMENT_2
} from '../../routes/index'
// Style
import './Tournament.css'
import SeeMore from '../SeeMore/SeeMore'

const Tournament = () => {

    const [data, setData] = useState({})
    const [data2, setData2] = useState({})

    const getInfo = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${PREVIEW_TORUNAMENT_1}`);
        const response_2 = await fetch(`${process.env.REACT_APP_API_URL}${PREVIEW_TORUNAMENT_2}`);
        const res = await response.json();
        const res_2 = await response_2.json();
        setData(res.data);
        setData2(res_2.data);
    }

    useEffect(() => {
        getInfo();
    }, [])

    return (
        <div className="tournament-section" >
            {(data && data2) && (<>
                <h2 className="title">{data.titulo || <Skeleton />}</h2>
                <h2>{data.descripcion || <Skeleton />}</h2>
                <div className="discipline-container">
                    {data.imagen && <img src={data.imagen} alt={data.alt} />}
                    {data2.imagen && <img src={data2.imagen} alt={data2.alt} />}
                </div>
                <h3>{data2.descripcion || <Skeleton />}</h3>
                {/* <div className="paragraphs" >
                <div>
                    <p>+20</p>
                    <p>años brindando servicio</p>
                </div>
                <div>
                    <p>+1000 </p>
                    <p>torneos realizados</p>
                </div>
                <div>
                    <p>3 </p>
                    <p>canchas deportivas</p>
                </div>
            </div> */}
                <SeeMore to="/Torneos" />
            </>)}
        </div>
    )
}

export default Tournament