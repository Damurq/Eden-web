import { Link }        from "react-router-dom"
// Local
import  SocialMedia                    from "../SocialMedia/SocialMedia.js"
import IconsComponent               from '../IconsComponent/IconsComponent'
// Styles
import "./Footer.css"

const Footer = ({ data }) => {
    const liClass = "menu-options__element menu-options__element--footer "

    return (
        <footer className="theme--2">
            <div className="footer-elements">
                <div className="footerSection--nav">
                    <ul className="menu-options-list">
                        {data.menu && data.menu.map((section, index) => {
                            return section.type === "Link"
                                ? (<li key={"nav-li-" + index} className="footer--link">
                                    <Link className={liClass} to={section.href}>{section.name}</Link>
                                </li>)
                                : (<li key={"nav-li-" + index} className="footer--link">
                                    <a className={liClass} href={section.href}>{section.name}</a>
                                </li>)
                        })}
                    </ul>
                </div>
                <div className="footerSection--SocialMedia">
                    <h3 className="text--center">
                        {'Redes sociales'}
                    </h3>
                    <SocialMedia />
                </div>
                <div className="footerSection--contact">
                    {data.info && data.info.map((info, index) => (
                        <div key={`extra-inf-${index}`}>
                        <h3  >
                            <IconsComponent className="icon" icon={info.icon} />
                            {info.data}
                        </h3>
                    </div>
                    ))}
                </div>
            </div>
        </footer>);
}

export default Footer;