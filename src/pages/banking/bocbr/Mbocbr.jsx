import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { changeValuesBanking } from "../../../features/banking";
import { useDispatch } from "react-redux";
export default function Mbocbr({ updateGstScore = () => {} }) {
  const [sectionScore, setsectionScore] = useState(0);
  const [formReset, setformReset] = useState(false);
  // // number of inward bounce group transactions we do not require useState
  const dispatch = useDispatch();
  // const [nobgt, setnobgt] = useState(0)
  // // number of debit group transactions
  // const [nccgt, setnccgt] = useState(0)
  // // number of debit group transactions
  // const [nccgt, setnccgt] = useState(0)
  let nobgt = 0,
    nccgt = 0,
    nccpt = 0;
  //  todo clear the document all input elements
  const resetformElement = () => {
    var element = document.querySelector(".gocbr-form");
    element.reset();
    setformReset(!formReset);
  };
  const handleCalculateGocbr = () => {
    var a = document.querySelector(".nobgt").value;
    var b = document.querySelector(".nccgt").value;
    var c = document.querySelector(".nccpt").value;
    console.log(a + " " + b + " " + c);
    let finalValue = 0;
    var calculation = parseFloat(a) * (100 / (parseFloat(b) + parseFloat(c)));
    console.log(calculation);
    if (calculation <= 3) {
      setsectionScore(30);
      finalValue = 30;
    } else if (calculation > 3 && calculation <= 10) {
      setsectionScore(15);
      finalValue = 15;
    } else {
      setsectionScore(0);
      finalValue = 0;
    }
    dispatch(changeValuesBanking({ type: "ocbr", value: finalValue }));
    updateGstScore(sectionScore);
    setformReset(!formReset);
  };

  return (
    <>
      <Box
        sx={{
          padding: "0px 10px",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <h4>BANKING | OUTWARD CHEQUE BOUNCE RATIO </h4>
        <div className="flex" style={{ width: "100%" }}>
          <div className="flex flex-grow">
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="nobgt"
                type={"text"}
                placeholder="No of Outward Bounce Transactions"
                name="email"
                onChange={(e) => {
                  handleCalculateGocbr();
                }}
              />
            </div>
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="nccgt"
                type={"text"}
                placeholder="No of Credit Cheque Transactions"
                name="email"
                onChange={(e) => {
                  handleCalculateGocbr();
                }}
              />
            </div>
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="nccpt"
                type={"text"}
                placeholder="No of Credit Customer Payement Transactions"
                name="email"
                onChange={(e) => {
                  handleCalculateGocbr();
                }}
              />
            </div>
          </div>
          <div className="score" style={{}}>
            {sectionScore}
          </div>
        </div>
      </Box>
    </>
  );
}
