import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValuesBanking } from "../../../features/banking";

export default function Mbcds({ updateGstScore = () => {} }) {
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
  const handleCalculateGocbr = () => {
    var a = document.querySelector(".stvet").value;
    var b = document.querySelector(".tctv").value;
    let finalScore = 0;
    var calculation = (parseFloat(a) / parseFloat(b)) * 100;

    if (calculation <= 10) {
      finalScore = 40;
      setsectionScore(40);
    } else if (calculation > 10 && calculation <= 20) {
      finalScore = 30;
      setsectionScore(30);
    } else if (calculation > 20 && calculation <= 30) {
      finalScore = 20;
      setsectionScore(20);
    } else {
      finalScore = 0;
      setsectionScore(0);
    }
    dispatch(changeValuesBanking({ type: "cds", value: finalScore }));
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
        <h4>BANKING | CASH DEPOSIT SCORE</h4>
        <div className="flex" style={{ width: "100%" }}>
          <div className="flex flex-grow">
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="stvet"
                type={"text"}
                placeholder="Sum of transactions"
                sx={{ width: "100%" }}
                name="email"
                onChange={(e) => {
                  handleCalculateGocbr();
                }}
              />
            </div>
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="tctv"
                type={"email"}
                placeholder="Total Credit Transaction Value"
                sx={{ width: "100%", marginTop: "10px" }}
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
