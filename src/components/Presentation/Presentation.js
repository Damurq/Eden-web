import React, { useState, useEffect } from "react"

//style
import './Presentation.css';
import PresentationCard  from '../PresentationCard/PresentationCard'
import SeeMore  from '../SeeMore/SeeMore'
//DATA
import { PRESENTATION_1, PRESENTATION_2 } from '../../routes/index'

const Presentation = () => {

    const [data1, setData] = useState({})
    const [data2, setData2] = useState({})

    
    const getInfo = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${PRESENTATION_1}`);
        const response_2 = await fetch(`${process.env.REACT_APP_API_URL}${PRESENTATION_2}`);
        const res = await response.json();
        const res_2 = await response_2.json();
        setData(res.data);
        setData2(res_2.data);
    }

      useEffect(() => {
        getInfo();
      }, [])


    return (
        <div id="presentation" className="presentation-section">
            {data1.titulo && <h2 className="title">{data1.titulo}</h2>}
                    <PresentationCard 
                    key={`presentation-${data1.nombre_interno}`}
                    data={data1} 
                    orientation={"left"} 
                    />
                    <PresentationCard 
                    key={`presentation-${data2.nombre_interno}`}
                    data={data2} 
                    orientation={"right"} 
                    />

            <SeeMore to="/Sobre-nosotros" />
        </div>
    )




}

export default Presentation