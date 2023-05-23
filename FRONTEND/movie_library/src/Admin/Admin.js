import React from 'react'
import UserLoginForm from '../User/LoginForm'

export default function Admin() {
  const getData = (data) => {
    console.log("Admin", data);
  }
  return (
    <>
    <div><UserLoginForm onSubmit={getData} isAdmin={true}/></div>
    </>
  )
}
