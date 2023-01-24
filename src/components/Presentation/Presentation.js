import React from 'react';

//style
import './Presentation.css';
import PresentationCard  from '../PresentationCard/PresentationCard'
import SeeMore  from '../SeeMore/SeeMore'

const Presentation = ({data}) => {
    let {title, paragraphs} = data

    return (
        <div id="#presentation" className="presentation-section">
            {title && <h2 className="title">{title}</h2>}
            {paragraphs && paragraphs.map((paragraph, index) => { 
                let orientation = (index)%2===0 ? "left": "right"
                return(
                    <PresentationCard 
                    key={`presentation-${index}`}
                    data={paragraph} 
                    orientation={orientation} 
                    />
                )
             }
            )}
            <SeeMore to="/Sobre-nosotros" />
        </div>
    )




}

export default Presentation