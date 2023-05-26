import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminActions, userActions } from '../store';

export default function Header() {

  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const logout = ( isAdmin ) => {
      dispatch(isAdmin ? adminActions.logout() : userActions.logout() )
  }
  return (
    <>
    <nav className="navbar bg-body-tertiary position-sticky" style={{ maxWidth: "100%"}}>
    <div className="container-fluid bg-primary" style={{paddingLeft:"60px"}}>
    <Link to="/" className="navbar-brand p-2 text-color-blue" >MOVIELAB</Link>
    
    <form className="d-flex" role="search">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-dark" type="submit">Search</button>
    </form>
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
            <Link to='/profile' className="btn btn-link text-dark" type="button">Profile</Link>
            <Link onClick={() => logout(true)} to='/' className="btn btn-link text-dark" type="button">Logout</Link>

            </>  
            )}  
         </div>
    </div>
    </nav>
    
    </>
  )
}
