import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footermenu(props) {
  return (
    <>
        <li className='li'>
            <NavLink exact to={props.link} className='navs'>{props.title}</NavLink>
        </li>
    </>
  )
}
