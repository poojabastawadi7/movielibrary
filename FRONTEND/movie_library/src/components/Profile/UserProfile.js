import React, { useEffect, useState } from 'react';
import classes from './UserProfile.module.css';
import { getAllUsers, getUserDetails } from '../../api-helpers/api-helpers';

export default function UserProfile() {

  const [user, setUser] = useState();

  useEffect(() => {
  
    getUserDetails()
    .then((data) => setUser(data.user))
    .catch((err) => console.log(err))
  }, [])
  
  
  return (
    <>
    
    <div className='d-flex p-2 w-100'>
      <div className='d-flex flex-column ps-3' style={{width:"30%" , paddingTop:"50px"}}>
       <span className="p-2" style={{textAlign: "center"}}> 
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" fill="currentColor" 
        className="bi bi-person-circle" viewBox="0 0 20 20">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg></span>
      { user && <> <span className="border border-2 rounded-pill text-center w-10"><p className='mt-2 w-20'>{user.name}</p></span>
      <span className="border border-2 rounded-pill text-center w-10 mt-2"><p className='mt-2'>{user.email}</p></span>
      </>}

      </div>
      <div className='d-flex flex-column p-2' style={{width:"70%", height:"100%"}}>
        <div className=' d-flex flex-column h-50 justify-content-center' style={{height: "50%"}}>
        <h1 className='text-center d-flex flex-column'>Purchased Movies</h1>
          <div className={classes.scrollable}>
          <table className="table table-success table-striped table-responsive-sm mt-3 ">
            
            <thead>
              <tr>
                <th scope="col">Movie</th>
                <th scope="col">Date of purcahse</th>
                
              </tr>
            </thead>
            <tbody >
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                
              </tr>
              
             
            </tbody>
          </table>
          </div> 
        </div>

        <div className='d-flex flex-column mt-3 justify-content-center'>
        <h1 className='text-center d-flex flex-column'>Rental Movies</h1>
          <div  className={classes.scrollable}>
          <table className="table table-success table-striped mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td >1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              
              
            </tbody>
          </table>
          </div> 
        </div>
      </div>
      </div>
    </>
  )
}
