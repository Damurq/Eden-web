import React            from "react"
// Components
import CardContact      from "../../components/CardContact/CardContact.js"
import Presentation      from "../../components/Presentation/Presentation.js"
import data             from "../../data/Home.json"

const Home = ()=>{

    return (
        <div className="Content">
            <Presentation data={data.components.Presentation} />
            <CardContact data={data.components.Contact} />
        </div>
    )
}
export default Home;