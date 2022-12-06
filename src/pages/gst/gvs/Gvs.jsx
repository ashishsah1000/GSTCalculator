import React, { useState } from "react";
import { Box } from "@mui/system";
import { Select, MenuItem, OutlinedInput, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { changeValueGst } from "../../../features/gst";

export default function Gvs() {
  const [sectionScore, setsectionScore] = useState(0);
  const dispatch = useDispatch();

  let bvYears = 0;
  var score = 0;
  const handleCalculateIcbr = (a) => {
    if (a >= 5) {
      score = 50;
      setsectionScore(50);
    } else if (a < 5 && a >= 3) {
      score = 40;
      setsectionScore(40);
    } else if (a < 3 && a >= 2) {
      score = 20;

      setsectionScore(20);
    } else {
      score = 0;

      setsectionScore(0);
    }
    dispatch(changeValueGst({ value: score, type: "vs" }));
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
            GST | Vintage Score
          </Typography>
          <Typography variant="p" sx={{ color: "rgba(22,22,22,.5)" }}>
            We can calculate the Vintage Score
          </Typography>
          <br />

          <Box sx={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <TextField
                    type={"number"}
                    label="Buisness Vintage Years"
                    sx={{ width: "100%" }}
                    name="email"
                    onChange={(e) => {
                      bvYears = e.target.value;
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
                handleCalculateIcbr(bvYears);
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
