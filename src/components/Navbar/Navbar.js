// Third party
import React from 'react';
import { Link, useLocation, useHistory }    from "react-router-dom"
import { useEffect, useState, useRef }              from "react"
// Components
import SocialMedia                             from "../SocialMedia/SocialMedia.js"
import Dropdown                                from './Dropdown/Dropdown';
// Styles
import "./Navbar.css";
import './Dropdown/Dropdown.css';

const Navbar = ({ data }) => {
    // Declaration of the Hooks
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [modal, setModal] = useState("");
    const [modale, setModale] = useState("");
    const history = useHistory();
    let location = useLocation();

    // Class that the li of the navigation bar will have
    const liClass = "menu-options__element"
    const logo = data.logo



      const handleClickMenu = (props) => {
            if (dropdown && props == modal) {
                setDropdown(false);
                setModal(props);
                setModale("");
              } 
              if (dropdown && props !== modal) {
                setDropdown(false);
                setModal(props);
                setDropdown(true);
                setModale(props);
              }
              if (!dropdown && props !== modal)  {
                setDropdown(true);
                setModal(props);
                setModale(props);
              }
              if (!dropdown && props == modal)  {
                setModal(props);
                setDropdown(true);
                setModale(props);
              }
      }



    //functions to click in the options window
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    //variable auxiliar
    const refOne = useRef(null);

    
    const handleclickOutside = (e) => {
        if (!refOne?.current?.contains(e.target)){
          setDropdown(false);
        } 
        if (!refOne?.current?.contains(e.target) && modal == modale )
        {
            setDropdown(false);
        }
      }
    
    /**
     * Redirect in case of clicking on a tag "a" with href "#"
     * @param {object} e evento
     */
    function clickHandler(e) {
        e.preventDefault();
        if (location.pathname === "/") {
            history.push("/");
        }
        // Get the top height of the element
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href) ? document.querySelector(href).offsetTop : 0;
        // Make the element scroll smoothly
        window.scroll({
            top: offsetTop - 50,
            behavior: "smooth"
        });
        // If it is a screen with a drop-down menu, we make the menu appear
        const menuOptions = document.querySelector(".menu-options")
        if (menuOptions?.classList.contains('menu-options-list-dropdown--enable')) {
            setOpen(false);
        }
    }

    /**
     * Function in charge of raising the scroll when a page is rendered
     * @param {*} e 
     */
    function clickHandlerRender(e) {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
        // If it is a screen with a drop-down menu, we make the menu appear
        const menuOptions = document.querySelector(".menu-options")
        if (menuOptions?.classList.contains('menu-options-list-dropdown--enable')) {
            setOpen(false);
        }
    }

    /*  - We add the click event to all the links and assign the corresponding function
        - We check the location of the page for the color of the navbar
    */
    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]'),
            linksRender = document.querySelectorAll('a[href^="/"]');
        for (const link of links) {
            link.addEventListener("click", clickHandler);
        }
        for (const linkR of linksRender) {
            linkR.addEventListener("click", clickHandlerRender);
        }
    }, []);
    useEffect(() => {
        document.addEventListener("click", handleclickOutside, true);
        }, []);

    return (
        <header className={`${open ? "header-open" : ""}`} >
            <div className="theme--1 navbar-Container">
                <div className="navbar">
                    <button className="dropdown-menu-button" onClick={() => { setOpen(!open) }}>
                        <div className={`menu menu--X ${open ? "open" : ""}`}>
                            <span className="menu__bar"></span>
                        </div>
                    </button>
                    <div className={`logo-container ${open ? "menu-options-list-dropdown--disable" : ""}`}>
                        <img className="logo" src ={logo} alt="logo" />
                    </div>
                </div>
            </div>
            <nav className={`theme--1 ${open ? "menu-options-list-dropdown--enable" : ""}`}  >
                <div className={`menu-options ${open ? "menu-options-list-dropdown--enable" : "menu-options-list-dropdown--disable"}`}>
                    <img className="logo--dropdown logo title" src ={logo} alt="logo" />
                    <ul className="menu-options-list" ref={refOne} >
                        {data.elements && data.elements.map((section, index) => {
                            return (section.type === "Link") ? 
                                <li key={"nav-li-" + index} >
                                    <Link className={liClass}   to={section.href}>{section.name}</Link>      
                                </li> 
                                :  
                                <li key={"nav-li-" + index }  >
                                    {
                                        section.type === "a" ? 
                                        (
                                        <a className={liClass} href={section.href} >
                                            {section.name}
                                        </a>
                                        ):
                                        (
                                            <>
                                            <a className={liClass} onClick={() =>  handleClickMenu(section.name) } style={{cursor:'pointer'}}>
                                            {
                                                section.name
                                            }
                                            </a>
                                            {
                                                (section.name === "Sobre nosotros" && dropdown  )
                                                &&
                                                    <>
                                                    {
                                                        ( modal === "Sobre nosotros" ) 
                                                        &&
                                                            <div>
                                                                <Dropdown subMenu={modal}/>
                                                            </div>
                                                    }
                                                    </>
                                                }
                                                {
                                                (section.name === "Eventos" && dropdown  )
                                                &&
                                                    <>
                                                    {
                                                        ( modal === "Eventos" ) 
                                                        &&
                                                            <div>
                                                                <Dropdown subMenu={modal} />
                                                            </div>
                                                    }
                                                    </>
                                                }
                                                {
                                                (section.name === "Actividades" && dropdown  )
                                                &&
                                                    <>
                                                    {
                                                        ( modal === "Actividades" ) 
                                                        &&
                                                            <div>
                                                                <Dropdown subMenu={modal} />
                                                            </div>
                                                    }
                                                    </>
                                                }
                                                
                                            </>    
                                        )
                                    }
                                    
                                </li>
                        })}
                    </ul>
                    <div className="SocialMedia">
                        <h3 className="text--center">
                            {'Social Media'}
                        </h3>
                        <SocialMedia />
                    </div>
                </div>
            </nav>
        </header >
    );
}

export default Navbar;
