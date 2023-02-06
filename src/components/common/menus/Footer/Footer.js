import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// Local
import SocialMedia from "../../../specific/SocialMedia/SocialMedia.js"
import IconsComponent from '../../../IconsComponent/IconsComponent.js'
// Data
import { SOCIAL_MEDIA, CONTACTO } from '../../../../routes/index'
// Styles
import "./Footer.css"

const Footer = ({ data }) => {
    const liClass = "menu-options__element menu-options__element--footer "

    const [socialMedia, setSocialMedia] = useState([])
    const [infoContact, setInfoContact] = useState([])

    const getInfo = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${CONTACTO}`);
        const social = await fetch(`${process.env.REACT_APP_API_URL}${SOCIAL_MEDIA}`);
        const res = await response.json();
        const res_social = await social.json();
        setInfoContact(res);
        setSocialMedia(res_social)
    }

    useEffect(() => {
        getInfo();
    }, [])

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
                    {socialMedia.length !== 0
                        ?
                        <>
                            <h3 className="text--center">
                                Redes sociales
                            </h3>
                            <SocialMedia data={socialMedia} componentName={"Footer"} />
                        </>
                        : null}
                </div>
                <div className="footerSection--contact">
                    {infoContact.map((info, index) => (
                        <div key={`extra-inf-${index}`}>
                            <h3  >
                                <IconsComponent className="icon" icon={info.tipo.toLowerCase()} />
                                {info.contacto}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </footer>);
}

export default Footer;