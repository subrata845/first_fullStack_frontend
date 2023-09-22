import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { PlaylistPlayOutlined } from '@mui/icons-material';
import { Navigate, useNavigate, useHistory } from 'react-router-dom';
import ReactDOM from "react-dom";
import People from '../Registration/Registration';
import Profile from '../Profile/Profile';
import { BrowserRouter, Router, Route, Routes, Link, useLocation, NavLink } from 'react-router-dom';
import './Login.css';
export default function Login() {

  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate('/src/components/');
  //   }  //React States

  //   useEffect(() => {
  //     navigate('/src/components/');
  //   }, []);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const Navigate=useNavigate();

  // User Login info
  const database = [
    {
      username: "admin",
      password: "admin"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );


  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>ppppppppppp
          <People />
          <BrowserRouter>
            {/*           
      <nav>
        <NavLink to="/src/components/Registration">People</NavLink>
        <NavLink to="/src/components/Profile">Profile</NavLink>
      </nav> */}
            <Routes>
              <Route path="/src/components/Registration/" element={<People />} />
            </Routes>
          </BrowserRouter>
        </div> : renderForm}
      </div>
    </div>

  );

}
