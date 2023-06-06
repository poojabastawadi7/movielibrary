import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMovieDetails } from '../../api-helpers/api-helpers';
import { useSelector } from 'react-redux';

export default function BuyOrRent() {

  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

     const [movie, setMovie] = useState();
     
     const id = useParams().id;
     console.log(id);

    useEffect(() => {
        getMovieDetails(id)
        .then((res) => setMovie(res.movie))
        .catch((err) => console.log(err));
    }, [id]);

    console.log(movie);

  return (
         
       <div className='pt-3'>{movie && <Fragment>
        { isUserLoggedIn && <>
       <h4 className='text-center'>Buy or Rent movie : {movie.title} </h4>
       <div className='d-flex p-2'>
        <div className='d-flex flex-column pt-4 w-50 me-auto'>

            <img src={movie.posterUrl} alt={ movie.title} className='ms-4' style={{width:"80%", height: "300px"}} />
            <div className='mt-2 ms-4 p-2' style={{width: "80%"}}>
                <p className='px-2'>{movie.description} </p>
                <p className='ps-2'> <b>Actors</b> : {movie.actors} </p>
                <p className='ps-2'> <b>Release Date</b> : {movie.releaseDate} </p>
            </div>
        </div>

        <div className='w-50 p-4'>
         <dl class="row pt-5">
            <Link class="btn btn-primary col-sm-3 me-3" type="submit" >Buy</Link>
            <dd class="col-sm-8">Rs.100</dd>

            <Link class="btn btn-primary col-sm-3 mt-4 me-3"  type="submit">Rent</Link>
            <dd class="col-sm-8 mt-4">Rs.40/day </dd>
           
        </dl>
        </div>
       </div>
       
       </>
  }
            
    </Fragment>}
    
    { !isUserLoggedIn && 
          <div>
          <div class="modal modal-dialog modal-dialog-centered p-5">
            <div class="modal-content">
              <div class="modal-header" style={{outline : "none"}}>
                <h5 class="modal-title">Please Login!</h5>
                <Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-x" viewBox="0 0 20 20"  style={{ width:"50px"}}>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg></Link>              </div>
              <div class="modal-body">
                <Link to="/user" >Click here to login</Link>
              </div>
              
            </div>
          </div>
          </div>

  }
    
    </div>
   
  )
}
