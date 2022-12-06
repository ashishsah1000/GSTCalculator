import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValuesBanking } from "../../../features/banking";

export default function Micbr({ updateGstScore = () => {} }) {
  const [sectionScore, setsectionScore] = useState(0);
  const [formReset, setformReset] = useState(false);
  const dispatch = useDispatch();
  // // number of inward bounce group transactions
  // const [nibgt, setnibgt] = useState(0)
  // // number of debit group transactions
  // const [ndcgt, setndcgt] = useState(0)
  // // number of debit group transactions
  // const [ndcgt, setndcgt] = useState(0)
  let nibgt = 0,
    ndcgt = 0,
    ndvpt = 0;

  const resetformElement = () => {
    var element = document.querySelector(".gicr-form");
    element.reset();
    setformReset(!formReset);
  };
  const handleCalculateIcbr = () => {
    var a = document.querySelector(".nibgt").value;
    var b = document.querySelector(".ndcgt").value;
    var c = document.querySelector(".ndvpt").value;
    console.log(a + " " + b + " " + c);
    let fValue = 0;
    var calculation = parseFloat(a) * (100 / (parseFloat(b) + parseFloat(c)));
    console.log(calculation);
    if (calculation <= 1) {
      fValue = 80;
      setsectionScore(80);
      updateGstScore(sectionScore);
    } else if (calculation > 1 && calculation <= 3) {
      fValue = 40;
      setsectionScore(40);
      updateGstScore(sectionScore);
    } else {
      fValue = 0;
      setsectionScore(0);
      updateGstScore(sectionScore);
    }
    dispatch(changeValuesBanking({ value: fValue, type: "icbr" }));
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
                className="nibgt"
                type={"text"}
                placeholder="No of Inward Bounce Transactions"
                name="email"
                onChange={(e) => {
                  handleCalculateIcbr();
                }}
              />
            </div>
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="ndcgt"
                type={"text"}
                placeholder="No of Debit Cheque Transactions"
                name="email"
                onChange={(e) => {
                  handleCalculateIcbr();
                }}
              />
            </div>
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="ndvpt"
                type={"text"}
                placeholder="No of Vendor Payement Transactions"
                name="email"
                onChange={(e) => {
                  handleCalculateIcbr();
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
