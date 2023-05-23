import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import UserLogin from './User/UserLogin'; 
import Admin from './Admin/Admin';
import MovieItem from './components/Movies/MovieItem';
import UserLoginForm from './User/LoginForm';
import Modal from './components/Modal';

function App() {
  return (
    <>
   
    <div>
    <Header />   
    {/* <HomePage />      */}
    {/* <UserLogin /> */}
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/userlogin" element={<Modal />} />
      </Routes>
      </section>

     
    
    </div>
    </>

      );
}

export default App;
