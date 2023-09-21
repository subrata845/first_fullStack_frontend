import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { PlaylistPlayOutlined } from '@mui/icons-material';


export default function People() {
  const paperStyle = { padding: '15px 20px', width: 400, margin: "5px" }
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [peoplee, setPeople] = useState([])
  const [errorMessages, setErrorMessages] = useState({});
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

 
  }

  const handleClick = (e) => {
    e.preventDefault()
    const ppl = { firstName, lastName, address, phone, email, password }
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
          
        } else {
          console.log(result.message)
          setErrorMessages({ name: "pass", message: errors.pass });
          renderErrorMessage("uname")
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
        <h1 style={{ color: "gray" }}>Registration Panel</h1>
        <TextField id="outlined-basic" label="First Name" variant="outlined" style={{ marginBottom: 16 }}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{ marginBottom: 16 }}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} />
        <TextField id="outlined-basic" label="Address" variant="outlined" style={{ marginBottom: 16 }}
          value={address}
          onChange={(e) => setAddress(e.target.value)} />
        <TextField id="outlined-basic" label="Phone" variant="outlined" style={{ marginBottom: 16 }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)} />
        <TextField id="outlined-basic" label="Email" variant="outlined" style={{ marginBottom: 16 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          style={{ marginBottom: 16 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleClick} style={{ marginLeft: 66 }}>
          Submit </Button>


      </Paper>
      {/* <h1>People</h1>
   <Paper elevation={3} style={paperStyle}>
    { 
    peoplee.map(ppl=>(
      <Paper elevation={3} key={ppl.id}>
      <b>Id</b>: {ppl.id}<br/>
      <b>First Name</b>: {ppl.firstName}<br/>
     <b>Last Name</b>:{ppl.lastName}<br/>
     <b>Address</b>:{ppl.address}<br/>
     <b>Email</b>:{ppl.email}<br/>
     <b>Phone</b>:{ppl.phone}<br/>
      </Paper>
    )
     
      )

    }
   </Paper> */}


      {/* <h1>People_List</h1>

   <Paper elevation={3} style={paperStyle}>
   (People_List.map(people=>(
    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={people.id}>
     Id:{people.id}<br/>
     First Name:{people.firstName}<br/>
     Last Name:{people.lastName}<br/>
     Address:{people.address}<br/>
     Email:{people.email}<br/>
     Phone:{people.phone}<br/>
     </Paper>
    ))
    )
    
    </Paper> */}

    </Container>

  );

}
