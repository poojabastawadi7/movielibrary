import React from 'react'
import UserLoginForm from '../User/LoginForm'
import { sendAdminAuthRequest } from '../api-helpers/api-helpers';

export default function Admin() {
  const getData = (data) => {
    console.log("Admin", data);
    sendAdminAuthRequest(data.inputs)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }
  return (
    <>
    <div><UserLoginForm onSubmit={getData} isAdmin={true}/></div>
    </>
  )
}
