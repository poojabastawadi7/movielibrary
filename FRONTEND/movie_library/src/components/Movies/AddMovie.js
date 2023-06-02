import React, { useState } from 'react'
import { addMovie } from '../../api-helpers/api-helpers';

export default function AddMovie() {

    const [inputs, setInputs] = useState({title:"", description:"", releaseDate:"", posterUrl:""});
    const [actors, setActors] = useState([]);

    const [actor, setActor] = useState("");

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault() ;
        console.log(inputs, actors);
        addMovie({ ...inputs, actors})
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    };
  return (
    <div>
        
       <form onSubmit={handleSubmit}>

        <div className='w-50 p-5 mt-5 m-auto d-flex flex-column shadow mb-5 bg-body-tertiary rounded border'>
        <h4 className='text-center'><b>Add New Movie</b></h4>
            <div class="mb-2">
                <label htmlFor="title" class="form-label">Title</label>
                <input type="text" class="form-control" name="title" value={inputs.title} onChange={handleChange} />
            </div>
            <div class="mb-2">
                <label htmlFor="descp" class="form-label">Description</label>
                <input type="text" class="form-control" name="description" value={inputs.description} onChange={handleChange}  />
            </div>
           
            <div class="mb-2">
                <label htmlFor="posterUrl" class="form-label">Poster Url</label>
                <input type="text" class="form-control" name="posterUrl" value={inputs.posterUrl} onChange={handleChange} />
            </div>
            <div class="mb-2 d-flex w-100">
               <div className='w-50'> <label htmlFor="actor" class="form-label">Actor</label>
                <input type="text" class="form-control" name="actor" value={actor} 
                onChange={(e) => {
                    setActor(e.target.value)
                }

                }  /></div>
              <div className='d-grid gap-2 ps-4 w-50 d-md-flex justify-content-md-start '>
                <button onClick={() => {
                    setActors([...actors, actor])
                    setActor("")
                }} 
                type="button" class="btn  btn-outline-secondary mt-4"  >Add</button>
              </div>
            </div>
            <div class="mb-2 d-flex w-100">
               <div className='w-50'> <label htmlFor="date" class="form-label">Release Date</label>
                <input type="date" class="form-control" name="releaseDate" value={inputs.releaseDate} onChange={handleChange}  /></div>
              <div className='d-grid gap-2 pe-4 w-50 d-md-flex justify-content-md-end '>
                <button type="submit" class="btn btn-primary me-md-3 mt-4"  >ADD MOVIE</button>
              </div>

            </div>
            </div>
</form>
    </div>
  )
}
