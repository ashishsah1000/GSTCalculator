import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../../composite/navbar/Navbar";
import Banking from "../banking/Banking";
import Banner from "./banner/Banner";
import { Box } from "@mui/system";
import Gst from "../gst/Gst";
import Gpis from "../gst/gpis/Gpis";
// import Gstall from "../gstall/Gstall";
import All from "../all/All";
// import Banking from '../banking/banking';
// import Ges from '../gst/Ges/Ges';
const Main = () => {
  const [users, setUser] = useState([]);
  const navigate = useNavigate();
  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/users/get-users", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setUser(data.user);
    console.log(data);
  };

  useEffect(() => {
    getUsers();
    if (localStorage.getItem("token") !== null) {
      console.log("authenticated");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="container">
      <Navbar />

      {/* <Box sx={{ marginTop: "10px" }}>
        <Banner />
      </Box> */}
      <Routes>
        <Route exact path="/main/gst/*" element={<Gst />} />
        <Route exact path="/all" element={<All />} />
        <Route exact path="*" element={<Banking />} />
        {/* <Route path="/main/banking/" element={<Banking />} /> */}
        {/* <Route path="/main/banking/*" element={<Banking />} /> */}
        {/* <Route path="/main/gst" element={<Gst />} /> */}
        {/* <Route path="*" element={<Gst />} /> */}
      </Routes>
    </div>

    // <div>{
    //     users.map(user=>{
    //         return <h2 key={user.email}>{user.email}</h2>
    //     })
    //     }</div>
  );
};

export default Main;
