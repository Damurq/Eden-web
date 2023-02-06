import React, { useEffect , useState } from "react"
// Components
import CarruselDiscover from "../../components/CarruselDiscover/CarruselDiscover"
import CardContact from "../../components/CardContact/CardContact.js"
import Presentation from "../../components/Presentation/Presentation.js"
import Tournament from "../../components/Tournament/Tournament.js"
import InitialCard from "../../components/InitialCard/InitialCard.js"
import CarruselActivities from "../../components/CarruselActivities/CarruselActivities"
import data from "../../data/Home.json"

const Home = () => {

    return (
        <div className="Content">
            <InitialCard />
            <Presentation data={data.components.Presentation} />
            <Tournament />
            <CarruselDiscover component="Home-Events" />
            <CarruselActivities />
            <CardContact data={data.components.Contact} />
        </div>
    )
}
export default Home;