import './App.css';
import { useState } from 'react';
import { BrowserRouter, Router, Route, Routes, Link, useLocation, NavLink } from 'react-router-dom';
import Appbar from './components/Appbar';
import People from './components/Registration/Registration';
import Login from './components/Login/Login';
import Button from '@mui/material/Button';
import Profile from './components/Profile/Profile'


function App() {


  return (
  <Login/>
    // <BrowserRouter>
    //   <nav>
    //     <NavLink to="/src/components/Login">Home</NavLink>
    //     <NavLink to="/src/components/Profile">Profile</NavLink>
    //     <NavLink to="/src/components/Registration">People</NavLink>
    //   </nav>
    //   <Routes>
    //     <Route path='/src/components/Login/' element={<Login />} />
    //     <Route path="/src/components/Registration/" element={<People />} />
    //     <Route path="/src/components/Profile" element={<Profile />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
