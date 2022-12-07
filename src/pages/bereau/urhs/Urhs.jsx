import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValuesBanking } from "../../../features/banking";
import { changeValueBereau } from "../../../features/bereau";
import { numberOfYears } from "../../../helpers/date";

export default function Urhs({ updateGstScore = () => {} }) {
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
  const handleSlectYears = (a) => {
    // a contains date in format yyyy-mm-dd
    var finalValue = 0;
    var calcYears = numberOfYears(a);
    if (calcYears > 2) {
      finalValue = 20;
    } else if (calcYears > 1 && calcYears <= 2) {
      finalValue = 15;
    } else if (calcYears > 0.6 && calcYears < 1) {
      finalValue = 10;
    } else {
      finalValue = 0;
    }
    dispatch(changeValueBereau({ type: "rhs", value: finalValue }));
    setsectionScore(finalValue);
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
        <h4>RTR History Score </h4>
        <div className="flex  " style={{ width: "100%" }}>
          <div className="flex flex-wrap flex-grow">
            <div className="input-holder" style={{}}>
              <label htmlFor=""></label>
              <input
                className="app1"
                type={"date"}
                placeholder="Sum of all months"
                sx={{ width: "100%" }}
                name="text"
                onChange={(e) => {
                  handleSlectYears(e.target.value);
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
