import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
export default function Gocbr({ updateGstScore = () => {} }) {
  const [sectionScore, setsectionScore] = useState(0);
  const [formReset, setformReset] = useState(false);
  // // number of inward bounce group transactions we do not require useState

  // const [nobgt, setnobgt] = useState(0)
  // // number of debit group transactions
  // const [nccgt, setnccgt] = useState(0)
  // // number of debit group transactions
  // const [nccgt, setnccgt] = useState(0)
  let nobgt = 0,
    nccgt = 0,
    nccpt = 0;
  //  todo clear the document all input elements
  const resetformElement = () => {
    var element = document.querySelector(".gocbr-form");
    element.reset();
    setformReset(!formReset);
  };
  const handleCalculateGocbr = (a, b, c) => {
    console.log(a + " " + b + " " + c);
    var calculation = parseFloat(a) * (100 / (parseFloat(b) + parseFloat(c)));
    console.log(calculation);
    if (calculation <= 3) {
      setsectionScore(30);
    } else if (calculation > 3 && calculation <= 10) {
      setsectionScore(15);
    } else {
      setsectionScore(0);
    }
    updateGstScore(sectionScore)
    setformReset(!formReset);
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
        <Fade in={true}>
          <Box sx={{ padding: "0px 30px" }}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#1e1a55" }}>
              GST | OUTWARD CHEQUE BOUNCE RATIO
            </Typography>
            <Typography variant="p" sx={{ color: "rgba(22,22,22,.5)" }}>
              We can calculate the Outward Cheque Bounce Ratio
            </Typography>
            <br />
            <form className="gocbr-form">
              <Box sx={{ marginTop: "20px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      type={"email"}
                      label="No of Outward Bounce Transactions"
                      sx={{ width: "100%", marginTop: "10px" }}
                      name="email"
                      onChange={(e) => {
                        nobgt = e.target.value;
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type={"email"}
                      label="No of Credit Cheque Transactions"
                      sx={{ width: "100%", marginTop: "10px" }}
                      name="email"
                      onChange={(e) => {
                        nccgt = e.target.value;
                      }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      type={"email"}
                      label="No of Credit Customer Payement Transactions"
                      sx={{ width: "100%", marginTop: "10px" }}
                      name="email"
                      onChange={(e) => {
                        nccpt = e.target.value;
                      }}
                    />
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
            </form>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "25px",
              }}
            >
              <Button
                variant="contained"
                disabled={formReset}
                size="large"
                sx={{ background: "#1E1A55" }}
                onClick={() => {
                  handleCalculateGocbr(nobgt, nccgt, nccpt);
                }}
              >
                GET SCORE
              </Button>
              &nbsp;
              <Button
                variant="contained"
                size="large"
                // sx={{ background: "teal" }}
                disabled={!formReset}
                color="secondary"
                onClick={() => {
                  resetformElement();
                }}
              >
                RESET FORM
              </Button>
            </Box>
          </Box>
        </Fade>
      </Box>

      <SectionScore title="Outward Cheque Bounce Ratio" score={sectionScore} />
    </>
  );
}
