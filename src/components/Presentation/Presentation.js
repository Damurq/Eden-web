import React from 'react';

//style
// import './Presentation.css';
import PresentationCard  from '../PresentationCard/PresentationCard'


const Presentation = ({data}) => {
    let {title, paragraphs} = data

    return (
        <div className="presentation section">
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
        </div>
    )




}

export default Presentation