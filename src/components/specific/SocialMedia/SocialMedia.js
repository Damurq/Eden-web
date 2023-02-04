// Components
import IconsComponent from "../../IconsComponent/IconsComponent"
// Style
import "./SocialMedia.css"

const SocialMedia = ({ data, componentName, orientation="horizontal" }) => {
    return (
        <div className={`icon--socialMedia icon--${orientation}`}>
            {data && data.map((social, index) => {
                return (<a 
                    key={`${social.name}-${index}-${componentName}`}
                    className={`${social.name.toLowerCase()} social`} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <IconsComponent className="icon" icon={social.name.toLowerCase()}/>
                    </a>)
            })}
        </div>
    );
}

export default SocialMedia;