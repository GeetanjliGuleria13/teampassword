import React from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';



const Menu = (props) => {
  return (
        <>
          <li className='li'>
            <NavLink exact to={props.link} className='navs'>{props.title}</NavLink>
          </li>
        </>
    );
}

export default Menu;




