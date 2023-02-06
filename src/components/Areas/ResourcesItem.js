import React, { useState } from 'react';

//Estilos y diseño
import './Resources.css'


function ResourcesItem(props) {

  const [dropdown, setDropdown] = useState(false);

  //cursor activo sobre el elemento Navbar
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  //cursor desactivado al salir del elemento Navbar
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };




  return (
    <>

      <div className='cards__item-two'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      >
        <a className='cards__item__link-two' href='/'>
              <img 
              className='cards__item__img-two'
              alt={props.title}
              src={props.src} />
          <div className='cards__item__info-two'>
            <h5 className='cards__item__text-two'>{props.title}</h5>
          </div>
        </a>
      </div>
    </>
  );
}

export default ResourcesItem;
