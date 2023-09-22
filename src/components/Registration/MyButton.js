import Button from '@mui/material/Button';
import { BrowserRouter, Router, Route, Routes, Link, useNavigate , NavLink } from 'react-router-dom';


export default function MyButton() {
    const navigate = useNavigate();
  
    return (
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={() => navigate('/src/components/Profile/')}
      >
        View
      </Button>
    );

}