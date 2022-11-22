import React            from "react"
// Components
import CarruselDiscover from "../../components/CarruselDiscover/CarruselDiscover"
import CardContact      from "../../components/CardContact/CardContact.js"
import data             from "../../data/Home.json"

const Home = ()=>{

    return (
        <div className="Content">
            <CarruselDiscover />
        </div>
    )
}
export default Home;