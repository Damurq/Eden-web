import React from "react"
// Components
import CarruselDiscover from "../../components/CarruselDiscover/CarruselDiscover"
import { GalleryArea } from "../../components/Areas/GalleryArea/GalleryArea"
import CardContact from "../../components/CardContact/CardContact.js"
import Presentation from "../../components/Presentation/Presentation.js"
import Tournament from "../../components/Tournament/Tournament.js"
import InitialCard from "../../components/InitialCard/InitialCard.js"
import CarruselActivities from "../../components/CarruselActivities/CarruselActivities"

const Home = () => {

    return (
        <div className="Content">
            <InitialCard />
            <Presentation />
            <Tournament />
            <CarruselDiscover component="Home-Events" />
            <GalleryArea component="GalleryArea-home" />
            <CarruselActivities component="Home-Activity" />
            <CardContact />
        </div>
    )
}
export default Home;