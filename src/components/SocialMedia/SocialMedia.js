import { BsInstagram, BsFacebook }    from "react-icons/bs"
import { FaLinkedinIn }             from "react-icons/fa"
// Style
import "./SocialMedia.css"

const  SocialMedia = () => {
    return ( 
        <div className="icon--socialMedia">
            <a className="instagram social" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <BsInstagram className="icon" />
            </a>
            <a className="linkedin social" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="icon" />
            </a>
            <a className="facebook social" href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <BsFacebook className="icon" />                
            </a>
        </div>
    );
}

export default SocialMedia;