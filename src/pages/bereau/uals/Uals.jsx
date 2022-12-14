import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValueBereau } from "../../../features/bereau";

export default function Uals({ updateGstScore = () => {} }) {
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
    var a = document.querySelector(".aln").value;
    let finalScore = 0;
    // var calculation = ((parseFloat(b) - parseFloat(a)) / parseFloat(b)) * 100;
    // =IF(B10>7,10,IF(AND(B10>0,B10<=7),20,30))
    if (a > 2) {
      finalScore = 30;
      setsectionScore(30);
    } else if (a == 1 || a == 2) {
      finalScore = 15;
      setsectionScore(15);
    } else {
      finalScore = 0;
      setsectionScore(0);
    }
    dispatch(changeValueBereau({ type: "als", value: finalScore }));
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
        <h4>Active Loan Score</h4>
        <div className="flex" style={{ width: "100%" }}>
          <div className="flex flex-grow">
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="aln"
                type={"text"}
                placeholder="Active Loan"
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
