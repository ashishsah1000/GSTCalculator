import React, { useState } from "react";
import { Box } from "@mui/system";
import { Select, MenuItem, OutlinedInput, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValueGst } from "../../../features/gst";
export default function Gssc() {
  const [sectionScore, setsectionScore] = useState(0);
  const dispatch = useDispatch();

  let ssc = 0;

  const handleCalculateIcbr = (a) => {
    let score = 0;
    if (a > 80) {
      score = 20;
    } else if (a > 60 && a <= 80) {
      score = 15;
    } else {
      score = 0;
    }
    setsectionScore(score);
    dispatch(changeValueGst({ value: score, type: "ssc" }));
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
            GST | Sales Score
          </Typography>
          <Typography variant="p" sx={{ color: "rgba(22,22,22,.5)" }}>
            We can calculate the Sales Score
          </Typography>
          <br />

          <Box sx={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <TextField
                    type={"number"}
                    label="Domestic Sales %"
                    sx={{ width: "100%" }}
                    name="email"
                    onChange={(e) => {
                      ssc = e.target.value;
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                {/* <TextField
                  type={"email"}
                  label="Other Inputs"
                  sx={{ width: "100%", marginTop: "10px" }}
                  name="email"
                  onChange={() => {}}
                /> */}
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
                handleCalculateIcbr(ssc);
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
