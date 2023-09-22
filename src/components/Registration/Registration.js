import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { PlaylistPlayOutlined } from '@mui/icons-material';
import './Registration.css'
import { BrowserRouter, Router, Route, Routes, Link, useNavigate, NavLink } from 'react-router-dom';
import Profile from '../Profile/Profile';
import MyButton from './MyButton';

export default function People() {
  const paperStyle = { padding: '15px 20px', width: 400, margin: "5px" }
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [peoplee, setPeople] = useState([])
  const [errorMessage, setErrorMessage] = useState('');



  const handleClick = (e) => {
    e.preventDefault()
    if (!firstName || !lastName || !address || !phone || !email || !password) {
      alert('All fields are required');
      return;
    }


    const ppl = { firstName, lastName, address, phone, email, password };
    console.log(PlaylistPlayOutlined)
    fetch('http://localhost:8080/people/add',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ppl)
      }).then(res => res.json())
      .then((result) => {
        if (result.status == "SUCCESS") {
          console.log(result.message)
          alert('Successful');

        } else {
          console.log(result.message)
          setErrorMessage(result.message);
        }
      })
  }

  useEffect(() => {
    fetch("http://localhost:8080/people/getAll")
      .then(res => res.json())
      .then((result) => {
        setPeople(result);
      })
  })





  return (

    <Container>
      <Paper elevation={3} style={paperStyle}>
        <BrowserRouter>
          <nav>
            <NavLink to="/src/components/Profile">Profile</NavLink>
          </nav>
          <Routes>
            <Route path="/src/components/Profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
        <h1 style={{ color: "gray" }}>Registration Panel</h1>
        <TextField id="outlined-basic" required label="First Name" variant="outlined" style={{ marginBottom: 16 }}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField id="outlined-basic" required label="Last Name" variant="outlined" style={{ marginBottom: 16 }}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} />
        <TextField id="outlined-basic" required label="Address" variant="outlined" style={{ marginBottom: 16 }}
          value={address}
          onChange={(e) => setAddress(e.target.value)} />
        <TextField id="outlined-basic" required label="Phone" variant="outlined" style={{ marginBottom: 16 }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)} />
        <TextField id="outlined-basic" required label="Email" variant="outlined" style={{ marginBottom: 16 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        {errorMessage && <div className="error">{errorMessage}</div>}

        <TextField
          id="outlined-password-input"
          required label="Password"
          type="password"
          style={{ marginBottom: 16 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Submit </Button>
        <BrowserRouter>
          <Routes>
            <Route path="/src/components/Profile/" element={<Profile />} />
          </Routes>
          <MyButton />
        </BrowserRouter>

      </Paper>
    </Container>
  );

}
