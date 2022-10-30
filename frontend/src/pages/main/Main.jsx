import { Container } from '@mui/system';
import React,{useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../composite/navbar/Navbar';
import Banking from '../banking/Banking';
import Banner from './banner/Banner';
import { Box } from '@mui/system';
const Main = () => {

    const[users,setUser]=useState([]);

    const getUsers = async()=>{
        const res = await fetch("http://localhost:3000/users/get-users", {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
          });
          const data = await res.json();
          setUser(data.user);
          console.log(data)
    }

    useEffect(()=>{
        getUsers();
    },[]);

  return (
    <div className="container">
      <Navbar />

      <Box sx={{marginTop:"10px"}}>
        <Banner />
      </Box>
      <Routes>
        <Route path="/main/banking" element={<Banking />} />
        <Route path="*" element={<Banking />} />
      </Routes>
    </div>

    // <div>{
    //     users.map(user=>{
    //         return <h2 key={user.email}>{user.email}</h2>
    //     })
    //     }</div>
  );
}

export default Main