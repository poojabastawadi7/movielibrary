import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMovieDetails } from '../../api-helpers/api-helpers';

export default function BuyOrRent() {
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
       <h4 className='text-center'>Buy or Rent movie : {movie.title} </h4>
       <div className='d-flex p-2'>
        <div className='d-flex flex-column pt-4 w-50 me-auto'>

            <img src={movie.posterUrl} alt={ movie.title} style={{width:"80%", height: "300px"}} />
            <div className='mt-3 w-80 p-2'>
                <p className='p-2'>Movie Description </p>
                <p className='p-2'>Movie Actors </p>

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

    
    </Fragment>}
    
    </div>
  )
}
