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
export default function Gvcs() {
  const [sectionScore, setsectionScore] = useState(0);
  const dispatch = useDispatch();

  let vendorPurchase = 0;
  let topfiveContri = 0;
  let maxSingleContribution = 0;

  const types = "";
  let nibgt = 0,
    ndcgt = 0,
    ndvpt = 0;
  const handleCalculateIcbr = (a, b, c) => {
    let vc = b / a;
    let svc = c / b;
    var cal = 0,
      score = 0;
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
    setsectionScore(score);
    dispatch(changeValueGst({ value: score, type: "vsc" }));
  };

  return (
    <>
      <Box
        sx={{
          boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
          padding: "30px 0px",
          overflow: "hidden",
          borderRadius: "10px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Box sx={{ padding: "0px 30px" }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: "#1e1a55" }}>
            GST | Vendor Cincentration Score
          </Typography>
          <Typography variant="p" sx={{ color: "rgba(22,22,22,.5)" }}>
            We can calculate the Vendor Cincentration Score
          </Typography>
          <br />

          <Box sx={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <TextField
                    type={"number"}
                    label="Total Vendor Purchase"
                    sx={{ width: "100%" }}
                    name="email"
                    onChange={(e) => {
                      vendorPurchase = e.target.value;
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <TextField
                    type={"number"}
                    label="Top 5 Vendor Contribution"
                    sx={{ width: "100%" }}
                    name="email"
                    onChange={(e) => {
                      topfiveContri = e.target.value;
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <TextField
                    type={"number"}
                    label="Max Single Customer Contribution"
                    sx={{ width: "100%" }}
                    name="email"
                    onChange={(e) => {
                      maxSingleContribution = e.target.value;
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{ background: "#1E1A55" }}
              onClick={() => {
                handleCalculateIcbr(
                  vendorPurchase,
                  topfiveContri,
                  maxSingleContribution
                );
              }}
            >
              GET SCORE
            </Button>
          </Box>
        </Box>
      </Box>

      <SectionScore score={sectionScore} />
    </>
  );
}
