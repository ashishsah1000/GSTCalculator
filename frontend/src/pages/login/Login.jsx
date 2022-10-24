import React from 'react'
import "./login.css"
import {Box,Typography ,TextField ,Button} from "@mui/material"
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PersonIcon from "@mui/icons-material/Person";

export default function Login() {
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
          
            label="Username"
            sx={{ width: "100%", marginTop: "30px" }}
          />
          <TextField
            type={"password"}
            label="Password"
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
          >
            Login{" "}
          </Button>
        </Box>
      </div>
    </div>
  );
}
