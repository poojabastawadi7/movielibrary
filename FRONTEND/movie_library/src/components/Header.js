import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminActions, userActions } from '../store';
// import { FaSearch } from 'react-icons/fa' ;
import '../App.css' ;
import { getAllMovies } from '../api-helpers/api-helpers';
import { Autocomplete, 
         TextField } from '@mui/material'

export default function Header() {

  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const logout = ( isAdmin ) => {
      dispatch(isAdmin ? adminActions.logout() : userActions.logout() )
  }

  useEffect(() => {
    getAllMovies()
    .then((data) => setMovies(data.movies))
    .catch((err) => console.log(err))
  }, []);

  // const handleChange = (e, val) => {
  //   setSelectedMovie(val);
  //   const movie = data.find((mov) => mov.title === val);
  //   console.log(movie);
  //   if (isUserLoggedIn) {
  //     navigate(`/booking/${movie._id}`);
  //   }
  // };
  
  return (
    <>
    <nav className="navbar bg-body-tertiary position-sticky" style={{ maxWidth: "100%"}}>
    <div className="container-fluid bg-primary" style={{paddingLeft:"60px"}}>
    <Link to="/" className="navbar-brand p-2 text-color-blue" >MOVIELAB</Link>
    
    <div className='input-group d-flex flex-nowrap w-25 ps-5'>
    <Autocomplete
            // onChange={handleChange}
            sx={{ borderRadius: 10, width: "100%", margin: "auto" }}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={movies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                sx={{
                  borderRadius: 2,
                  input: { color: "black" },
                  bgcolor: "#ffffff",
                  padding: "6px",
                }}
                variant="standard"
                placeholder="Type to Search..."
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
    </div>
    
         <div className="d-grid gap-1 d-md-flex justify-content-md-end">
          { !isAdminLoggedIn && !isUserLoggedIn && (
            <>
            <Link to='/user' className="btn btn-link me-md-2 text-dark" type="button">UserLogin</Link>
            <Link to='/admin' className="btn btn-link text-dark" type="button">Admin</Link>
            </>
          )}
             {isUserLoggedIn && (
            <>
            <Link to='/profile' className="btn btn-link me-md-2 text-dark" type="button">Profile</Link>
            <Link onClick={() => logout(false)} to='/' className="btn btn-link text-dark" type="button">Logout</Link>
            </>
          )}

          { isAdminLoggedIn && (
            <>
            <Link to='/addmovie' className="btn btn-link me-md-2 text-dark" type="button">Add Movie</Link>
            <Link to='/admin-profile' className="btn btn-link text-dark" type="button">Profile</Link>
            <Link onClick={() => logout(true)} to='/' className="btn btn-link text-dark" type="button">Logout</Link>

            </>  
            )}  
         </div>
    </div>
    </nav>
    
    </>
  )
}
