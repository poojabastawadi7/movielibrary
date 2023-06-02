import React from 'react';
import { Link } from 'react-router-dom';


export default function MovieItem({posterUrl, title, description, alt, id}) {
  return (
   
      <div className="col-sm-3">
       <div className="card shadow p-3 mb-3 bg-body-tertiary rounded" style={{width:"15rem"}} >
        <img src={posterUrl} 
          className="card-img-top" alt={alt} style={{height: "12rem"}}/>
          <div className="card-body d-flex flex-column" >
            <h5 className="card-title">{title}</h5>

           
            {/* <p className="card-text">{description}</p> */}
      
            <Link to={`/buyorrent/${id}`} className="btn btn-primary btn-sm mt-2" style={{width:"100px"}}>Buy or Rent</Link>
        </div>
      </div>
      </div>
  )
}
