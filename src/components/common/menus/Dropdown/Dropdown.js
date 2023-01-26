import React, { useState } from "react";
import "./Dropdown.css";
import MenuElementComponent from "../MenuElementComponent/MenuElementComponent.js"

function Dropdown({ subMenu, setOpen }) {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
    setOpen("")
  }

  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {subMenu.map((item, index) => {
        return (
          <li key={`dropdown-${index}`} >
            <MenuElementComponent className="dropdown-link" section={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
