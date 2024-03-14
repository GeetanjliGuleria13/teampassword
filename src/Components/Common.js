import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




export default function Common(props) {
  const btnName = props.btnName;

  return (
    <>
      <div className="common-inner-sec">
        <h3>{props.title}</h3>
        <p className='py-3 mb-2'>{props.desc}</p>
        {btnName
        ?
        <div className="common-btn">
        
          <NavLink exact to={props.visit}>{props.btnName}</NavLink>
          
        </div>
        :''
      } 
      </div>
      
    </>
  )
}

const Commontwosection =(props) =>{
  const desc2 = props.desc2;
  return(
    <>
    <div className='row align-items-center'>
      <div className='col-md-6'>
        <img src={props.imgsrc} className='img-fluid' alt={props.imgsrc}/>
      </div>
      <div className='col-md-6'>
        <h3 className="mb-4">{props.title}</h3>
        <p>{props.desc}</p>
        { desc2
         ?
         <p>{props.desc2}</p>
         :''
        }
      </div>
    </div>
    </>
  )
}
export {Commontwosection};

const FaqAccordian =({question, answer}) =>{
  const [show, setShow] = useState(false)
  return (
    <>
      <div className='faq-heading'>
        <span onClick={() =>setShow(!show)} className='d-flex align-items-center justify-content-between'>
        <h6>{question}</h6>
          <p>{show? "-" : "+"}</p>
        </span>
      </div>
      {show && <div className="answer-sec"><p>{answer}</p></div> }
    </>
  )

}
export {FaqAccordian};
