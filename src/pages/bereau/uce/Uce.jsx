import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValuesBanking } from "../../../features/banking";
import { changeValueBereau } from "../../../features/bereau";

export default function Uce({ updateGstScore = () => {} }) {
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
    var a = document.querySelector(".cenq").value;
    let finalScore = 0;
    // var calculation = ((parseFloat(b) - parseFloat(a)) / parseFloat(b)) * 100;
    // =IF(B10>7,10,IF(AND(B10>0,B10<=7),20,30))
    if (a > 7) {
      finalScore = 10;
      setsectionScore(10);
    } else if (a > 0 && a <= 7) {
      finalScore = 20;
      setsectionScore(20);
    } else {
      finalScore = 30;
      setsectionScore(30);
    }
    dispatch(changeValueBereau({ type: "ce", value: finalScore }));
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
        <h4>Credit Enquiries </h4>
        <div className="flex" style={{ width: "100%" }}>
          <div className="flex flex-grow">
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="cenq"
                type={"text"}
                placeholder="Credit Enquiries"
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
