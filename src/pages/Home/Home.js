import React            from "react"
// Components
import CardContact      from "../../components/CardContact/CardContact.js"
import data             from "../../data/Home.json"

const Home = ()=>{

    return (
        <div className="Content">
            <CardContact data={data.components.Contact} />
        </div>
    )
}
export default Home;