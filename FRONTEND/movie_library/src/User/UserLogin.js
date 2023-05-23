import React from 'react'
import UserLoginForm from './LoginForm'
import { sendUserAuthRequest } from '../api-helpers/api-helpers';


export default function UserLogin() {
    const getData = (data) => {
        console.log(data);
     sendUserAuthRequest(data.inputs, data.signup)           
          .then((resp) => console.log(resp))
          .catch((err) => console.log(err));
      
      
    
       
    };

  return (
    <div><UserLoginForm onSubmit = {getData} isAdmin={false} /></div>
  )
}
