import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

//dataDropdown
import { SubMenuAboutUs, SubMenuEvents, SubMenuActivities } from './MenuItems';

function Dropdown({subMenu}) {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {
            (subMenu == "Sobre nosotros" )
             &&
              <>
              {SubMenuAboutUs.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className={item.cName}
                      href={item.path}
                      onClick={() => setClick(false)}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
             </>
        }
        {
            (subMenu == "Eventos" )
             &&
              <>
              {SubMenuEvents.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className={item.cName}
                      href={item.path}
                      onClick={() => setClick(false)}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
             </>
        }
        {
            (subMenu == "Actividades" )
             &&
              <>
              {SubMenuActivities.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className={item.cName}
                      href={item.path}
                      onClick={() => setClick(false)}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
             </>
        }
        
      </ul>
  );
}

export default Dropdown;
