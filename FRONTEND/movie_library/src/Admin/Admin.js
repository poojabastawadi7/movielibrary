import React from 'react'
import UserLoginForm from '../User/LoginForm'
import { sendAdminAuthRequest } from '../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { adminActions } from '../store';

export default function Admin() {
  const dispatch = useDispatch();
  const getData = (data) => {
    console.log("Admin", data);
    sendAdminAuthRequest(data.inputs)
    .then((res) => console.log(res))
    .then(() => dispatch(adminActions.login()))
    .catch((err) => console.log(err))
  }
  return (
    <>
    <div><UserLoginForm onSubmit={getData} isAdmin={true}/></div>
    </>
  )
}
