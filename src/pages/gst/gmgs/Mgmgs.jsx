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
export default function Mgmgs() {
  const [sectionScore, setsectionScore] = useState(0);
  const dispatch = useDispatch();

  let growthPercentage = 0;
  const handleCalculateIcbr = (a) => {
    let score = 0;
    if (a == "") {
      score = 0;
    } else if (a <= 0) {
      score = 20;
    } else if (a > 0 && a < 5) {
      score = 40;
    } else if (a > 5) {
      score = 70;
    } else {
      score = 0;
    }
    setsectionScore(score);
    dispatch(changeValueGst({ value: score, type: "mgs" }));
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
                GST | Monthly Growth Score
              </Typography>

              <Box sx={{ marginTop: "0px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl sx={{ m: 1, width: "100%" }}>
                      <TextField
                        type={"number"}
                        label="Growth %"
                        sx={{ width: "100%" }}
                        name="email"
                        onChange={(e) => {
                          growthPercentage = e.target.value;
                          handleCalculateIcbr(growthPercentage);
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
