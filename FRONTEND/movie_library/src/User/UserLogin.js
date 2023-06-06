import React from 'react'
import UserLoginForm from './LoginForm'
import { sendUserAuthRequest } from '../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { userActions } from '../store';
import { useNavigate } from 'react-router-dom';


export default function UserLogin() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onResReceived = ( data ) => {
    console.log(data);
    dispatch(userActions.login())
    localStorage.setItem("userId", data.id)
    // navigate("/") ;
  }
    const getData = (data) => {
        console.log(data);
     sendUserAuthRequest(data.inputs, data.signup)           
          .then(onResReceived)
          .catch((err) => console.log(err));
      
      
    
       
    };

  return (
    <div><UserLoginForm onSubmit = {getData} isAdmin={false} /></div>
  )
}
