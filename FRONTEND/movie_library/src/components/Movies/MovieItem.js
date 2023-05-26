import React from 'react';
import { Link } from 'react-router-dom';


export default function MovieItem({image, title, text, alt}) {
  return (
   
      <div className="col-sm-3">
       <div className="card shadow p-3 mb-3 bg-body-tertiary rounded" style={{width:"15rem"}} >
        <img src={image} 
          className="card-img-top" alt={alt} style={{height: "12rem"  }}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <Link to="/" className="btn btn-primary">Buy or Rent</Link>
        </div>
      </div>
      </div>
  )
}
