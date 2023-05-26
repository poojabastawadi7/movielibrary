import React from 'react'
import UserLoginForm from './LoginForm'
import { sendUserAuthRequest } from '../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { userActions } from '../store';


export default function UserLogin() {
  const dispatch = useDispatch();
  const onResReceived = ( data ) => {
    console.log(data);
    dispatch(userActions.login())
    localStorage.setItem("userId", data.id)
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
