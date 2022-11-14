import React, { useState } from "react";
import { Box } from "@mui/system";
import { Select, MenuItem, OutlinedInput, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
export default function Gvcs() {
  const [sectionScore, setsectionScore] = useState(0);
  // // number of inward bounce group transactions
  // const [nibgt, setnibgt] = useState(0)
  // // number of debit group transactions
  // const [ndcgt, setndcgt] = useState(0)
  // // number of debit group transactions
  // const [ndcgt, setndcgt] = useState(0)
  let vendorPurchase = 0;
  let topfiveContri = 0;
  let maxSingleContribution =0;
  const types = "";
  let nibgt = 0,
    ndcgt = 0,
    ndvpt = 0;
  const handleCalculateIcbr = (a) => {
    if (a >= 5) {
      setsectionScore(50);
    } else if (a < 5 && a >= 3) {
      setsectionScore(40);
    } else if (a < 3 && a >= 2) {
      setsectionScore(20);
    } else {
      setsectionScore(0);
    }
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
                // handleCalculateIcbr();
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
