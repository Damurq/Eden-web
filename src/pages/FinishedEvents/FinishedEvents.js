import React            from "react"
// Components
import HeroEvents from './components/HeroEvents/HeroEvents';
import CardsEvents from './components/CardsEvents/CardsEvents';

const FinishedEvents = ()=>{

    return (
        <div className="Content">
            <HeroEvents />
            <CardsEvents />
        </div>
    )
}
export default FinishedEvents;