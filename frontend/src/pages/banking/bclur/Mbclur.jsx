import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValuesBanking } from "../../../features/banking";
export default function Mbclur({ updateGstScore = () => {} }) {
  const [sectionScore, setsectionScore] = useState(0);
  const [formReset, setformReset] = useState(false);
  // // number of inward bounce group transactions we do not require useState
  const dispatch = useDispatch();
  // const [nom, setnom] = useState(0)
  // // number of debit group transactions
  // const [stam, setstam] = useState(0)
  // // number of debit group transactions
  // const [nccgt, setnccgt] = useState(0)
  let nom = 0,
    stam = 0,
    sacl = 0,
    alm = 0;
  //  todo clear the document all input elements
  const resetformElement = () => {
    var element = document.querySelector(".gocbr-form");
    element.reset();
    setformReset(!formReset);
  };
  const handleCalculateGocbr = (a, b, d) => {
    var a = document.querySelector(".nom").value;
    var b = document.querySelector(".stam").value;
    var d = document.querySelector(".sacl").value;
    let finalValue = 0;
    let c = parseFloat(a) / parseFloat(b);
    var alump = (parseFloat(c) / parseFloat(d)) * 100;
    console.log(a + " " + b + " " + c);
    var calculation = alump;
    var slcheck = parseFloat(d) > 0 ? true : false;
    if (calculation < 0.4) {
      setsectionScore(10);
      finalValue = 10;
    } else if (calculation > 0.4 && calculation <= 0.8) {
      setsectionScore(80);
      finalValue = 80;
    } else if (calculation > 0.8 && calculation <= 1) {
      setsectionScore(40);
      finalValue = 40;
    } else if (calculation > 1 && calculation <= 1.2) {
      setsectionScore(20);
      finalValue = 20;
    } else {
      setsectionScore(0);
      finalValue = 0;
    }
    dispatch(changeValuesBanking({ type: "clur", value: finalValue }));
    // console.log(calculation);
    // if (calculation <= 3) {
    //   setsectionScore(30);
    // } else if (calculation > 3 && calculation <= 10) {
    //   setsectionScore(15);
    // } else {
    //   setsectionScore(0);
    // }
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
        <h4>Banking | CREDIT LIMIT UTILIZATION RATIO</h4>
        <div className="flex  " style={{ width: "100%" }}>
          <div className="flex flex-wrap flex-grow">
            <div className="input-holder" style={{}}>
              <label htmlFor=""></label>
              <input
                className="nom"
                type={"text"}
                placeholder="Sum of all months"
                sx={{ width: "100%" }}
                name="text"
                onChange={(e) => {}}
              />
            </div>
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="stam"
                type={"text"}
                placeholder="No Of Months"
                sx={{ width: "100%", marginTop: "10px" }}
                name="email"
                onChange={(e) => {
                  handleCalculateGocbr();
                }}
              />
            </div>
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="sacl"
                type={"text"}
                placeholder="Sanctioned Limit"
                sx={{ width: "100%", marginTop: "10px" }}
                name="email"
                onChange={(e) => {
                  handleCalculateGocbr();
                }}
              />
            </div>
          </div>
          <div className="score">{sectionScore}</div>
        </div>
      </Box>
    </>
  );
}
