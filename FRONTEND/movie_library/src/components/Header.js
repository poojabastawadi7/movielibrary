import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <nav className="navbar bg-body-tertiary position-sticky">
    <div className="container-fluid bg-primary" style={{paddingLeft:"60px"}}>
    <a className="navbar-brand p-2 text-color-blue" >MOVIELAB</a>
    
    <form className="d-flex" role="search">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-dark" type="submit">Search</button>
    </form>
         <div className="d-grid gap-1 d-md-flex justify-content-md-end">
            <Link to='/UserLogin' className="btn btn-link me-md-2 text-dark" type="button">UserLogin</Link>
            <Link to='/admin' className="btn btn-link text-dark" type="button">Admin</Link>
         </div>
    </div>
    </nav>
    
    </>
  )
}
