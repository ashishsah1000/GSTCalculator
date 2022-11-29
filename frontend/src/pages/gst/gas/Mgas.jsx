import React, { useState } from "react";
import { Box } from "@mui/system";
import { Select, MenuItem, OutlinedInput, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { SectionScore } from "../../../composite";
import { changeValueGst } from "../../../features/gst";
export default function Mgas() {
  const [sectionScore, setsectionScore] = useState(0);
  const dispatch = useDispatch();
  let cAge = 0;
  const handleCalculateIcbr = (a) => {
    // var a = document.querySelector(".cAge").value;
    var score = 0;
    if (a >= 27 && a <= 57) {
      score = 10;
    } else if (a >= 22 && a <= 26) {
      score = 5;
    } else {
      score = 0;
    }
    setsectionScore(score);
    dispatch(changeValueGst({ value: score, type: "as" }));
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
                GST | Age Score
              </Typography>

              <Box sx={{ marginTop: "0px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <FormControl sx={{ m: 1, width: "100%" }}>
                      <TextField
                        className="cAge"
                        type={"number"}
                        label="Character Age"
                        sx={{ width: "100%" }}
                        name="email"
                        onChange={(e) => {
                          cAge = e.target.value;
                          handleCalculateIcbr(e.target.value);
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
