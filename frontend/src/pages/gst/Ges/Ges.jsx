import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
export default function Ges() {
  const [sectionScore, setsectionScore] = useState(0);
  const [formReset, setformReset] = useState(false);
  // // number of inward bounce group transactions we do not require useState

  // const [stam, setstam] = useState(0)
  // // number of debit group transactions
  // const [afb, setafb] = useState(0)
  // // number of debit group transactions
  // const [afb, setafb] = useState(0)
  let stam = 0,
    afb = 0,
    nccpt = 0;
  //  todo clear the document all input elements
  const resetformElement = () => {
    var element = document.querySelector(".gocbr-form");
    element.reset();
    setformReset(!formReset);
  };
  const handleCalculateGocbr = (a, b) => {
    console.log(a + " " + b );
    if(a>b){
      setsectionScore("T")
    }else{
      setsectionScore("F");

    }
    // var calculation = parseInt(a) * (100 / (parseInt(b) + parseInt(c)));
    // console.log(calculation);
    // if (calculation <= 3) {
    //   setsectionScore(30);
    // } else if (calculation > 3 && calculation <= 10) {
    //   setsectionScore(15);
    // } else {
    //   setsectionScore(0);
    // }
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
              GST | EMI SCORE
            </Typography>
            <Typography variant="p" sx={{ color: "rgba(22,22,22,.5)" }}>
              We can calculate the emi score
            </Typography>
            <br />
            <form className="gocbr-form">
              <Box sx={{ marginTop: "20px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      type={"text"}
                      label="Sum of all months avg balance"
                      sx={{ width: "100%", marginTop: "10px" }}
                      name="text"
                      onChange={(e) => {
                        stam = e.target.value;
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type={"text"}
                      label="Average Finance Obligation"
                      sx={{ width: "100%", marginTop: "10px" }}
                      name="text"
                      onChange={(e) => {
                        afb = e.target.value;
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {/* <TextField
                  type={"text"}
                  label="Other Inputs"
                  sx={{ width: "100%", marginTop: "10px" }}
                  name="text"
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
                  handleCalculateGocbr(stam, afb);
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

      <SectionScore title="Emi Score" score={sectionScore} />
    </>
  );
}
