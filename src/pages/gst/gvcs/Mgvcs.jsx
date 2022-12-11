import React, { useState } from "react";
import { Box } from "@mui/system";
import { Select, MenuItem, OutlinedInput, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { changeValueGst } from "../../../features/gst";

import { SectionScore } from "../../../composite";
export default function Mgvcs() {
  const [sectionScore, setsectionScore] = useState(0);
  const dispatch = useDispatch();

  let vendorPurchase = 0;
  let topfiveContri = 0;
  let maxSingleContribution = 0;

  const handleCalculateIcbr = () => {
    var a = document.querySelector(".tvp").value;
    var b = document.querySelector(".tvc").value;
    var c = document.querySelector(".tnumber").value;
    console.log(a + " " + b + " " + " " + c);
    let vc = b / a;
    let svc = c / b;
    var cal = 0,
      score = 0;
    if (a != "" && b != "" && c != "") {
      if (b >= 0 && b < 40) {
        cal = 40;
        setsectionScore(50);
      } else if (b >= 40 && b < 60) {
        cal = 60;
      } else if (b >= 60 && b < 80) {
        cal = 80;
      } else if (b >= 80 && b <= 100) {
        cal = 100;
      } else {
        cal = 0;
      }
      if (svc > 20) {
        score = 0;
      } else if (cal == 40) {
        score = 20;
      } else if (cal == 60) {
        score = 15;
      } else if (cal == 80) {
        score = 10;
      } else if (cal == 100) {
        score = 0;
      }
    } else {
      score = 0;
    }

    setsectionScore(score);
    dispatch(changeValueGst({ value: score, type: "vsc" }));
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
        <div className="flex">
          <div className="flex-grow">
            <Box sx={{ padding: "0px 0px" }}>
              <Typography
                variant="h7"
                sx={{ fontWeight: 800, color: "#1e1a55" }}
              >
                GST | Vendor Cincentration Score
              </Typography>
              <br />
              <Box sx={{ marginTop: "0px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <FormControl sx={{ m: 1, width: "100%" }}>
                      <input
                        className="tvp"
                        type={"number"}
                        placeholder="Total Vendor Purchase"
                        style={{
                          width: "100%",
                          padding: "20px 10px",
                          margin: "5px 5px",
                        }}
                        name="email"
                        onChange={(e) => {
                          vendorPurchase = e.target.value;
                          handleCalculateIcbr();
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl sx={{ m: 1, width: "100%" }}>
                      <input
                        className="tvc"
                        type={"number"}
                        placeholder="Top 5 Vendor Contribution"
                        style={{
                          width: "100%",
                          padding: "20px 10px",
                          margin: "5px 5px",
                        }}
                        name="email"
                        onChange={(e) => {
                          topfiveContri = e.target.value;
                          handleCalculateIcbr();
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl sx={{ m: 1, width: "100%" }}>
                      <input
                        className="tnumber"
                        type={"number"}
                        placeholder="Max Single Customer Contribution"
                        style={{
                          width: "100%",
                          padding: "20px 10px",
                          margin: "5px 5px",
                        }}
                        name="email"
                        onChange={(e) => {
                          maxSingleContribution = e.target.value;
                          handleCalculateIcbr();
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </div>
          <div className="score">{sectionScore}</div>
        </div>
      </Box>
    </>
  );
}
