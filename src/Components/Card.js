import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Card(props) {
  return (
    <>
      <div className='col-md-4'>
        <div className="card">
            {props.imgsrc}
            <div className="card-body">
                <h6>{props.title}</h6>
                <p>{props.desc}</p>
            </div>
        </div>
      </div>
      
    </>
  )
}
const Cardprice =(props) =>{
  const cardlinkdata = props.cardlinkdata;
  return (
    <>
    <div className='col-md-3 pb-3'>
      <img src={props.imgsrc} alt="icons" /> 
      <h6>{props.title}</h6>
      <p>{props.desc}</p>
      {cardlinkdata
        ?
          <NavLink to={props.cardlink} >{props.cardlinkdata}</NavLink>
          :''
        }
      
    </div>
    </>
  )
}
export {Cardprice};