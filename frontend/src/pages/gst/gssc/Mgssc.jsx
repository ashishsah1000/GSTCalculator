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
export default function Mgssc() {
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
                GST | Sales Score
              </Typography>
              <br />
              <Box sx={{ marginTop: "0px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <FormControl sx={{ m: 1, width: "100%" }}>
                      <TextField
                        type={"number"}
                        label="Domestic Sales %"
                        sx={{ width: "100%" }}
                        name="email"
                        onChange={(e) => {
                          ssc = e.target.value;
                          handleCalculateIcbr(ssc);
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
