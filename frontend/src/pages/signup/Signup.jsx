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
            Register New Users
          </Typography>
          <TextField
          type={'email'}
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
            sx={{ width: "100%"}}
          />
          <br />
          <InputLabel id="role">Role</InputLabel>
                <Select
                    labelId="role"
                    id="demo-simple-select"
                    value={user.role}
                    label="Age"
                    name='role'
                    sx={{ width: "100%",marginTop:"20px" }}
                    onChange={onChangeHandler}
                >
                    <MenuItem value={"a"}>a</MenuItem>
                    <MenuItem value={"b"}>b</MenuItem>
                    <MenuItem value={"c"}>c</MenuItem>
                </Select>
          <div></div>
          <Button
            variant="contained"
            sx={{ background: "#1E1A55" }}
            endIcon={<KeyboardDoubleArrowRightIcon />}
            size="large"
            onClick={handleSubmit}
          >
            Register{" "}
          </Button>
          <Typography
            variant="p"
            sx={{ position: "relative", top: "20px", left: "2px" }}
          >
            Need help ?
          </Typography>
          <br />
          <br />
          <br />
        </Box>
      </div>
    </div>
  );
}
