import React from 'react'
import UserLoginForm from '../User/LoginForm'
import { sendAdminAuthRequest } from '../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { adminActions } from '../store';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  const onResReceived = ( data ) => {
    console.log(data);
    dispatch(adminActions.login())
    localStorage.setItem("adminId", data.id)
    localStorage.setItem("Token", data.token)
    // navigate("/");

  }
  const getData = (data) => {
    console.log("Admin", data);
    sendAdminAuthRequest(data.inputs)
    .then(onResReceived)
    .catch((err) => console.log(err))
  }
  return (
    <>
    <div><UserLoginForm onSubmit={getData} isAdmin={true}/></div>
    </>
  )
}
