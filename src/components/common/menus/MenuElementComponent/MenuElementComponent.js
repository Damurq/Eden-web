import React from 'react'
import { Link }    from "react-router-dom"

const MenuElementComponent = ({ className = '', section, handleClick }) => {

    const selectMenuElement = () => {
        let element = <div></div>
        switch (section.type) {
            case 'Link':
                element = <Link className={className} to={section.href}>{section.name}</Link>
                break;
            case 'a':
                element = <a className={className} href={section.href} >
                    {section.name}
                </a>
                break;
            case 'sub-menu':
                element = <div className={className} onClick={() => handleClick(section.name)} style={{ cursor: 'pointer' }}>
                    {section.name}
                </div>
                break;
            default:
                element = <a className={className} href={section.href} >
                    {section.name}
                </a>
                break;
        }
        return element
    }

    return (
        selectMenuElement()
    )
}

export default MenuElementComponent