import React from 'react'
import UserLoginForm from './LoginForm'
import { sendUserAuthRequest } from '../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { userActions } from '../store';


export default function UserLogin() {
  const dispatch = useDispatch();
    const getData = (data) => {
        console.log(data);
     sendUserAuthRequest(data.inputs, data.signup)           
          .then((resp) => console.log(resp))
          .then(() => dispatch(userActions.login()))
          .catch((err) => console.log(err));
      
      
    
       
    };

  return (
    <div><UserLoginForm onSubmit = {getData} isAdmin={false} /></div>
  )
}
