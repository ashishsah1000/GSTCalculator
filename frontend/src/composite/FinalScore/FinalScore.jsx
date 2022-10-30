import React from 'react'
import "./FinalScore.css"
import { Button } from '@mui/material';

export default function FinalScore() {
  return (
    <div className="sidScore">
      <div className="scorce">
        <span>96</span>
      </div>
      <div className="abtScore">
        <span className="ScrHead">Total cc Score</span>
        <span className="abtScr">Some other point that</span>
        <span className="abtScr">we can add</span>
      </div>
      <div className="scrBtns">
        <Button variant="contained" sx={{marginTop:"20px",background:"#1e1a55"}} >
          Calculate
        </Button>
        <Button variant="contained" color='warning'  sx={{marginTop:"20px"}} >
          Save Data
        </Button>

      </div>
    </div>
  );
}
