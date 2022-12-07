import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValuesBanking } from "../../../features/banking";
import { changeValueBereau } from "../../../features/bereau";

export default function Ucibsrc({ updateGstScore = () => {} }) {
  const [sectionScore, setsectionScore] = useState(0);
  const [formReset, setformReset] = useState(false);
  // // number of inward bounce group transactions we do not require useState
  const dispatch = useDispatch();

  const resetformElement = () => {
    var element = document.querySelector(".gocbr-form");
    element.reset();
    setformReset(!formReset);
  };
  const getAcsValue = (a) => {
    if (a >= 675) {
      return 80;
    } else if (a < 675 && a > 600) {
      return 30;
    } else return 0;
  };
  const handleCalculateGocbr = (a, b, d) => {
    var a = document.querySelector(".app1").value;
    var b = document.querySelector(".app2").value;
    var d = document.querySelector(".app3").value;
    let finalValue = 0;
    var acs1 = getAcsValue(parseInt(a));
    var acs2 = getAcsValue(parseInt(b));
    var acs3 = getAcsValue(parseInt(d));
    // let c = parseFloat(a) / parseFloat(b);
    var avq = parseInt(
      (parseFloat(acs1) + parseFloat(acs2) + parseFloat(acs3)) / 3
    );
    // console.log(a + " " + b + " " + c);
    var calculation = avq;
    setsectionScore(avq);
    finalValue = avq;

    dispatch(changeValueBereau({ type: "cibsrc", value: finalValue }));

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
        <h4>CIBIL Score</h4>
        <div className="flex  " style={{ width: "100%" }}>
          <div className="flex flex-wrap flex-grow">
            <div className="input-holder" style={{}}>
              <label htmlFor=""></label>
              <input
                className="app1"
                type={"text"}
                placeholder="Applicant 1"
                sx={{ width: "100%" }}
                name="text"
                onChange={(e) => {}}
              />
            </div>
            <div className="input-holder">
              <label htmlFor=""></label>
              <input
                className="app2"
                type={"text"}
                placeholder="Applicant 2"
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
                className="app3"
                type={"text"}
                placeholder="Applicant 3"
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
