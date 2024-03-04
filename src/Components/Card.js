import React from 'react'

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
