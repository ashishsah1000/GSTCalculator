import React from 'react'
import "./FinalScore.css"
import { Button } from '@mui/material';
import { useSelector } from "react-redux";
import {Stack,Chip} from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

export default function FinalScore({score=96}) {
  const bankingStatus = useSelector((state) => state.banking.bankingData);
  console.log("from redux", bankingStatus);
  const [finalScore,setFinalScore]= useState(0);
  let sum =0;
 Object.entries(bankingStatus).map(([key, value]) => {
   if (value !== undefined) {
     sum = sum + parseFloat(value);
   }
 });
  useEffect(()=>{
    setFinalScore(sum)
  },[sum])
  return (
    <div className="sidScore">
      <div className="scorce">
        <span>{finalScore}</span>
      </div>
      <div className="abtScore">
        <span className="ScrHead">Total cc Score</span>
        <span className="abtScr">Some other point that</span>
        <span className="abtScr">we can add</span>
      </div>
      <div style={{padding:"20px 20px",display:'flex',flexWrap:"wrap",justifyContent:"center"}}>
          {Object.entries(bankingStatus).map(([key, value]) =>{

            if(value==undefined){
              return <Chip style={{margin:"2px"}} label={key} color="primary" variant='outlined' />;
            }else{
              return (
                <Chip
                  style={{ margin: "2px" }}
                  label={key}
                  color="success"
                  variant="filled"
                />
              );

            }
          }
            
          )}
      </div>
      <div className="scrBtns">
        <Button
          variant="contained"
          sx={{ marginTop: "20px", background: "#1e1a55" }}
        >
          Calculate
        </Button>
        <Button variant="contained" color="warning" sx={{ marginTop: "20px" }}>
          Save Data
        </Button>
      </div>
    </div>
  );
}
