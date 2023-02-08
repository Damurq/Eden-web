import React from 'react'
import GallerysOffer from '../../components/CardOffer/GalleryOffer';


const WhatWeOffer = () => {
    return (
        <div className="Content" style={{height:"auto"}}>
             <h2 className="title" style={{paddingTop: "4rem", paddingLeft: "5.5rem", marginBottom: "2rem"}}>¿Qué Ofrecemos?</h2>
            <GallerysOffer/>
        </div>
    )
}

export default WhatWeOffer