import React, { useState } from 'react'
import { Link } from 'react-router-dom';

 const UserLoginForm = ({onSubmit, isAdmin }) => {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSignup, setIsSignup] = useState(false);


  const handleChange = (e) => {
      setInputs((prevState) => ({
         ...prevState,
         [e.target.name] : e.target.value
      }));
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(inputs);
      onSubmit({inputs, signup: isAdmin? false : isSignup});
  }
  return (
    <>
    
        <div className="modal modal-dialog modal-dialog-centered" 
    style={{maxWidth: "100%", height: "auto" }}>
    <div className="modal modal-dialog modal-dialog-centered w-50">
    <div className="modal-content">

      <div className='modal-header bg-primary bg-opacity-75 fs-4 fw-semibold'>
        <div className='modal-title '>{isSignup? "Signup" : "Login"}</div>
        {/* <Link to="/"  type="submit" className="btn-close" data-bs-dismiss="modal"></Link> */}
        {/* <Link to="/" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </Link> */}
    <Link to="/">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-x" viewBox="0 0 20 20"  style={{ width:"50px"}}>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg></Link>
              
      </div>
            
            <form onSubmit ={handleSubmit} className=' modal-body bg-primary-subtle'>
            { !isAdmin && isSignup && (<div className="m-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type={"text"} className="form-control" id="name" placeholder="Enter name" 
                name="name"
                value={inputs.name}
                onChange={handleChange} />
              </div>)
            }
              <div className="m-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type={"email"} className="form-control" id="email" 
                placeholder="Enter email" 
                name="email"
                value={inputs.email}
                onChange={handleChange} />
                 
              </div>
              <div className="m-3">
                <label htmlFor="pwd" className="form-label">Password:</label>
                <input type={"password"} className="form-control" id="pwd" placeholder="Enter password" 
                name="password"
                value={inputs.password}
                onChange={handleChange} /> 
              </div>
             
              <div className="d-grid gap-2 col-5 mx-auto">
                <button className="btn btn-primary" type="button-submit">{isSignup? "Signup" : "Login"}</button>
               {!isAdmin && (<button onClick={() => setIsSignup(!isSignup)} className="btn btn-outline-secondary" type="button">Switch To {isSignup? "Login" : "Signup"}</button>)
               }</div>
          </form> 
          </div>
    </div>
    </div>
    

    </>

    //            <h5 className="modal-title">Modal title</h5>
    //           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //         </div>
    //         <div className="modal-body">
    //           <p>Modal body text goes here.</p>
    //         </div>
    //         <div className="modal-footer">
    //           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //           <button type="button" className="btn btn-primary">Save changes</button>
             
              //       </div>
    

   
    

     
  );
};
export default UserLoginForm;