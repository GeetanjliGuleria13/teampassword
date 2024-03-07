import React from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
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
  return (
    <>
    <div className='col-md-4'>
      <div className='card'>
        <div className='card-body'>
          <h6>{props.title}</h6>
          <p>{props.desc}</p>
          <div className='price-licence d-flex align-items-center'>
            <PersonAddAltIcon/>
            <span>{props.licencedesc}</span>
          </div>
          <div className='price-trial'>
            <NavLink to={props.pricevisit}>{props.pricevisitname}</NavLink>
          </div>
          <p className='actual-price'>{props.yearactualprice}</p>
          <div className='compare-price-sec d-flex'>
            <span className='coin-icon'>$</span>
            <span className="compare-price">{props.actualprice}</span>
          </div>
          <p className='price-desc'>{props.pricedesc}</p>
          <span className='monthdesc'>{props.monthdesc}</span>
        </div>
      </div>
    </div>
    </>
  )
}
export {Cardprice};