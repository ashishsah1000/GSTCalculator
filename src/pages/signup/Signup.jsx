import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./signup.css"
import {Box,Typography ,TextField ,Button, MenuItem, InputLabel,Select,FormControl} from "@mui/material"
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PersonIcon from "@mui/icons-material/Person";

export default function Signup() {

    const location = useNavigate();

  let initialState = {
    email:"",
    password:'',
    role:""
  }

  const [user,setUser] = useState(initialState);
  
  const handleSubmit =async (e)=>{
    const res = await fetch("http://localhost:3000/users/register",{
      method:"POST",
      headers:{
        "Content-type":'application/json'
      },
      body:JSON.stringify(user)
    })
    const data = await res.json();
    if(data.success===1){
        location('login');
    }
  }

 const  onChangeHandler = (e)=>{
    let name = e.target.name;
    let value =  e.target.value;
    setUser((prevState)=>{
      return{
        ...prevState,
        [name]:value
      }
    })
  }

  return (
    <div className="login">
      <div className="bigCircle">hey</div>
      <div className="cover">
        <Box
          sx={{
            width: 350,
            height: 400,
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
            Register New Users
          </Typography>
          <TextField
            type={"email"}
            label="Username"
            sx={{ width: "100%", marginTop: "30px" }}
            name="email"
            value={user.email}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
          <br></br>
          <br></br>
          <TextField
            type={"password"}
            label="Password"
            sx={{  width: "100%" }}
            name="password"
            value={user.password}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
          <br />
          <br></br>
          <FormControl fullWidth> 
            <InputLabel id="role">Role</InputLabel>
            <Select
              labelId="role"
              id="demo-simple-select"
              value={user.role}
              label="Age"
              name="role"
              onChange={(e) => {
                onChangeHandler(e);
              }}
            >
              <MenuItem value={"a"}>User</MenuItem>
              <MenuItem value={"b"}>Creator</MenuItem>
              <MenuItem value={"c"}>Admin</MenuItem>
            </Select>
          </FormControl>

          <div style={{ height: "20px" }}></div>
          <Typography variant="p">Need help ?</Typography>
          <div style={{ height: "20px" }}></div>
          <Button
            variant="contained"
            sx={{ background: "#1E1A55" }}
            endIcon={<KeyboardDoubleArrowRightIcon />}
            size="large"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Register{" "}
          </Button>

          <br />
          <br />
          <br />
        </Box>
      </div>
    </div>
  );
}
