import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import UserLogin from './User/UserLogin'; 
import Admin from './Admin/Admin';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AllMovies from './components/Movies/AllMovies';
import { adminActions, userActions } from './store';
import BuyOrRent from './components/GetMovie/BuyOrRent';
import UserProfile from './components/Profile/UserProfile';
import AddMovie from './components/Movies/AddMovie';
import AdminProfile from './components/Profile/AdminProfile';

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
   
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<AllMovies />} />
        
        { !isUserLoggedIn && !isAdminLoggedIn && <>        
        <Route path="/user" element={<UserLogin />} />
        <Route path="/admin" element={<Admin />} />
         </> }

        {/* { isUserLoggedIn && !isAdminLoggedIn && <> */}
        <Route path="/buyorrent/:id" element={<BuyOrRent />} />
        <Route path="/user" element={<UserProfile />} />
        {/* </>} */}

        {isAdminLoggedIn && !isUserLoggedIn && <>
        <Route path="/addmovie" element={<AddMovie/>} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        </>}



      </Routes>
      </section>

     
    
    </div>
    </>

      );
}

export default App;
