import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import UserLogin from './User/UserLogin'; 
import Admin from './Admin/Admin';
import Modal from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AllMovies from './components/Movies/AllMovies';
import { adminActions, userActions } from './store';

function App() {
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);

  useEffect(() => {
    if(localStorage.getItem("userId")){
      dispatch(userActions.login());
    }else if(localStorage.getItem("adminId")){
      dispatch(adminActions.login());

    }
  })
 
 
  return (
    <>
   
    <div>
    <Header />   
    {/* <HomePage />      */}
    {/* <UserLogin /> */}
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/movies" element={<AllMovies />} />
      </Routes>
      </section>

     
    
    </div>
    </>

      );
}

export default App;
