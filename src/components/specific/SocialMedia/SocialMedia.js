// Components
import IconsComponent from "../../IconsComponent/IconsComponent"
// Style
import "./SocialMedia.css"

const SocialMedia = ({ data, componentName, orientation="horizontal" }) => {
    return (
        <div className={`icon--socialMedia icon--${orientation}`}>
            {data && data.map((social, index) => {
                return (<a 
                    key={`${social.tipo}-${index}-${componentName}`}
                    className={`${social.tipo.toLowerCase()} social`} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <IconsComponent className="icon" icon={social.tipo.toLowerCase()}/>
                    </a>)
            })}
        </div>
    );
}

export default SocialMedia;