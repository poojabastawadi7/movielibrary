import React, { useEffect, useState } from 'react'
import magicflute from '../assets/magicflute.jpg';
import MI from "../assets/mission-impossible-dead-reckoning-part-one.jpg";
import TheLittleMermaid from "../assets/the-little-mermaid.jpg";
import { Link } from 'react-router-dom';
import { getAllMovies } from '../api-helpers/api-helpers';
import MovieItem from './Movies/MovieItem';


export default function HomePage() {

  
  const [movies, setMovies] = useState() ;
  
  useEffect(() => {
    getAllMovies()
    .then((data) => setMovies(data.movies))
    .catch((err) => console.log(err));
  }, []);


  return (
    <>
    {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
     <div class="carousel-item active">
      <img src={ magicflute } 
      className="w-50  mx-auto mh-auto h-50 d-block" alt="mf" />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
     </div>
     <div class="carousel-item">
      <img src={ MI } className="rounded mx-auto d-block" alt="mi" />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
     </div>
     <div class="carousel-item">
      <img src={ TheLittleMermaid } className="rounded mx-auto d-block" alt="TLM" />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
     </div>
    </div>
    </div> */}



{/* <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ TheLittleMermaid }  class=" row col-4 mx-auto thumbnail img-responsive h-50" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={ MI } class="row col-4 mx-auto thumbnail img-responsive h-50" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={ magicflute } class="row col-4 mx-auto thumbnail img-responsive h-50" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}


<div className="section3">
      <div className="row">
          <div className="col-lg-9 mx-auto w-90 p-4">
              <div id="demo" className="carousel slide" data-bs-ride="carousel">

                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                  </div>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={ TheLittleMermaid }  alt="little mermaid" className="d-block mx-auto" style={{ width:"100%" ,height:"300px" }} />
                    </div>
                    <div className="carousel-item">
                      <img src={ MI } alt="mission impossible" className="d-block mx-auto" style={{width:"100%" , height:"300px"}} />
                    </div>
                    <div className="carousel-item">
                      <img src={ magicflute } alt="magic flute" className="d-block mx-auto" style={{width:"100%" , height:"300px"}} />
                    </div>
                  </div>

                  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                  </button>

          </div>
          </div>
               </div>
  </div>

  <p className='h3 text-center mb-4'>Recent Releases</p>

  <div className='container'>
  <div className="row justify-content-center">

    
    
     {movies && 
     movies
     .slice(0, 4)
     .map((movie, index) => (
      <MovieItem id={movie._id} key={index} image={movie.image} title={movie.title} text={movie.text} alt={movie.alt}/>
      )
      
    )}
      
         <Link to="/movies" className= "d-grid gap-2 d-md-flex justify-content-md-end">
         <p className="fst-italic fs-4">View all
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
          </p></Link>
      

</div>
</div> 
  

   </>

  )
}
