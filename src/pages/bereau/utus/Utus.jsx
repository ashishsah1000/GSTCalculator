import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValuesBanking } from "../../../features/banking";
import { changeValueBereau } from "../../../features/bereau";

export default function Utus({ updateGstScore = () => {} }) {
  const [sectionScore, setsectionScore] = useState(0);
  const [formReset, setformReset] = useState(false);
  // // number of inward bounce group transactions we do not require useState
  const dispatch = useDispatch();

  // const [stvet, setstvet] = useState(0)
  // // number of debit group transactions
  // const [tctv, settctv] = useState(0)
  // // number of debit group transactions
  // const [tctv, settctv] = useState(0)
  let stvet = 0,
    tctv = 0,
    nccpt = 0;
  //  todo clear the document all input elements
  const resetformElement = () => {
    var element = document.querySelector(".gocbr-form");
    element.reset();
    setformReset(!formReset);
  };
  const handleCalculateemis = () => {
    var a = document.querySelector(".ubl").value;
    let finalScore = 0;
    // var calculation = ((parseFloat(b) - parseFloat(a)) / parseFloat(b)) * 100;
    // =IF(B23>2,50,IF(AND(B23>=1,B23<=2),25,0))
    if (a > 2) {
      finalScore = 50;
      setsectionScore(50);
    } else if (a >= 1 && a <= 2) {
      finalScore = 25;
      setsectionScore(25);
    } else {
      finalScore = 0;
      setsectionScore(0);
    }
    dispatch(changeValueBereau({ type: "tus", value: finalScore }));
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
        <h4>Tenured UBL Score</h4>
        <div className="flex" style={{ width: "100%" }}>
          <div className="flex flex-grow">
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="ubl"
                type={"text"}
                placeholder="UBL"
                sx={{ width: "100%" }}
                name="email"
                onChange={(e) => {
                  handleCalculateemis();
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
