import React from 'react'
// Components
import SliderSyncing from "../../components/CarruselDiscover/SliderSyncing"
import {Resources} from "../../components/CarruselDiscover/Resources"

const Areas = () => {
  return (
    <div className="Content">
        <SliderSyncing component="Areas" />
        <Resources component="Resources" />
    </div>
  )
}

export default Areas;