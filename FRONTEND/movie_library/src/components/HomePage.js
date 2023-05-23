import React from 'react'
import magicflute from '../assets/magicflute.jpg';
import MI from "../assets/mission-impossible-dead-reckoning-part-one.jpg";
import TheLittleMermaid from "../assets/the-little-mermaid.jpg";
import MovieItem from './Movies/MovieItem';

export default function HomePage() {
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
          <div className="col-lg-8 mx-auto w-80 p-4">
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

  <MovieItem />

   </>

  )
}
