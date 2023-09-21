import * as React from 'react';
import {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { PlaylistPlayOutlined } from '@mui/icons-material';


export default function Profile() {
    const paperStyle={padding:'15px 20px', width:400,margin:"5px"}
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [address,setAddress]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[peoplee,setPeople]=useState([])

   
    useEffect(()=>
    {
      fetch("http://localhost:8080/people/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setPeople(result);
      })
    })
    

  return (
<div>
    { 
    peoplee.map(ppl=>(
      <Paper elevation={18} key={ppl.id}>
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
      </div>
       
  );
  
}
