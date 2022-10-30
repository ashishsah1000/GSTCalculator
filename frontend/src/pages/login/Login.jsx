import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Box, Typography, TextField, Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Login() {
  let initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const res = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log(data);
    if (data.success === 1) {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    }
  };

  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className="login">
      <div className="bigCircle">hey</div>
      <div className="cover">
        <Box
          sx={{
            width: 350,
            height: 350,
            padding: "40px 40px",
            margin: "0px auto",
            borderRadius: 2,
            marginTop: "100px",
            backgroundColor: "ghostwhite",
            "&:hover": {
              //   backgroundColor: "primary.main",
              //   opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Typography variant="h4" sx={{ color: "#1E1A55" }}>
            {" "}
            <SettingsIcon
              fontSize="large"
              sx={{ position: "relative", top: "6px", left: "-5px" }}
            />
            Login to Calculate
          </Typography>
          <TextField
            type={"email"}
            label="Username"
            sx={{ width: "100%", marginTop: "30px" }}
            name="email"
            value={user.email}
            onChange={onChangeHandler}
          />
          <TextField
            type={"password"}
            label="Password"
            name="password"
            value={user.password}
            onChange={onChangeHandler}
            sx={{ width: "100%", marginTop: "20px" }}
          />
          <br />
          <div></div>
          <Typography
            variant="p"
            sx={{ position: "relative", top: "20px", left: "2px" }}
          >
            Need help ?
          </Typography>
          <br />
          <br />
          <br />
          <Button
            variant="contained"
            sx={{ background: "#1E1A55" }}
            endIcon={<KeyboardDoubleArrowRightIcon />}
            size="large"
            onClick={handleSubmit}
          >
            Login{" "}
          </Button>
        </Box>
      </div>
    </div>
  );
}
