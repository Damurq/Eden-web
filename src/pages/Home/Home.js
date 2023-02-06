import React, { useEffect , useState } from "react"
// Components
import CarruselDiscover from "../../components/CarruselDiscover/CarruselDiscover"
import { GalleryArea } from "../../components/Areas/GalleryArea/GalleryArea"
import CardContact from "../../components/CardContact/CardContact.js"
import Presentation from "../../components/Presentation/Presentation.js"
import Tournament from "../../components/Tournament/Tournament.js"
import InitialCard from "../../components/InitialCard/InitialCard.js"
import data from "../../data/Home.json"

const Home = () => {

    return (
        <div className="Content">
            <InitialCard />
            <Presentation data={data.components.Presentation} />
            <Tournament />
            <CarruselDiscover component="Home-Events" />
            <GalleryArea component="GalleryArea-home"/>
            <CardContact data={data.components.Contact} />
        </div>
    )
}
export default Home;