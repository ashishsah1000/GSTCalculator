import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValuesBanking } from "../../../features/banking";
export default function Mbes() {
  const [sectionScore, setsectionScore] = useState(0);
  const [formReset, setformReset] = useState(false);

  let stam = 0,
    afb = 0,
    nccpt = 0;
  const dispatch = useDispatch();

  //  todo clear the document all input elements
  const resetformElement = () => {
    var element = document.querySelector(".gocbr-form");
    element.reset();
    setformReset(!formReset);
  };
  const handleCalculateGocbr = () => {
    var a = document.querySelector(".stamt").value;
    var b = document.querySelector(".afb").value;
    let score = 0;
    console.log("a is " + a + "thsi " + b);
    if (a != "" && b != "") {
      let check = false;
      let cal = ((b - a) / a) * 100;
      if (a > b) {
        check = false;
      } else {
        check = true;
      }
      console.log("check is", check);
      if (check == true) {
        score = 50;
      } else {
        if (cal >= 0.8) score = 40;
        else score = 0;
      }
    } else {
      score = 0;
    }

    setsectionScore(score);
    dispatch(changeValuesBanking({ type: "es", value: score }));

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
        <h4>Banking | EMI SCORE </h4>
        <div className="flex" style={{ width: "100%" }}>
          <div className="flex flex-grow">
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="stamt"
                type={"text"}
                placeholder="Sum of all months avg balance"
                name="email"
                onChange={(e) => {
                  handleCalculateGocbr();
                }}
              />
            </div>
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="afb"
                type={"text"}
                placeholder="Average Finance Obligation"
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
