import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValuesBanking } from "../../../features/banking";

export default function Bcds({ updateGstScore = () => {} }) {
  const [sectionScore, setsectionScore] = useState(0);
  const [formReset, setformReset] = useState(false);
  // // number of inward bounce group transactions we do not require useState
  const dispatch = useDispatch();

  // const [stvet, setstvet] = useState(0)
  // // number of debit group transactions
  // const [tctv, settctv] = useState(0)
  // // number of debit group transactions
  // const [tctv, settctv] = useState(0)
  let stvet = 0,
    tctv = 0,
    nccpt = 0;
  //  todo clear the document all input elements
  const resetformElement = () => {
    var element = document.querySelector(".gocbr-form");
    element.reset();
    setformReset(!formReset);
  };
  const handleCalculateGocbr = (a, b) => {
    let finalScore =0;
    var calculation = (parseFloat(a) / parseFloat(b)) * 100;
    console.log(calculation);
    if (calculation <= 10) {
      finalScore=40
      setsectionScore(40);
    } else if (calculation > 10 && calculation <= 20) {
      finalScore = 30;
      setsectionScore(30);
    } else if (calculation > 20 && calculation <= 30) {
      finalScore = 20;
      setsectionScore(20);
    } else {
      finalScore = 0;
      setsectionScore(0);
    }
    dispatch(changeValuesBanking({type:"cds",value:finalScore}))
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
              BANKING | CASH DEPOSIT SCORE
            </Typography>
            <Typography variant="p" sx={{ color: "rgba(22,22,22,.5)" }}>
              We can calculate the Cash Deposite Score
            </Typography>
            <br />
            <form className="gocbr-form">
              <Box sx={{ marginTop: "20px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      type={"email"}
                      label="Sum of transactions"
                      sx={{ width: "100%", marginTop: "10px" }}
                      name="email"
                      onChange={(e) => {
                        stvet = e.target.value;
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type={"email"}
                      label="Total Credit Transaction Value"
                      sx={{ width: "100%", marginTop: "10px" }}
                      name="email"
                      onChange={(e) => {
                        tctv = e.target.value;
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
                  handleCalculateGocbr(stvet, tctv, nccpt);
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

      <SectionScore title="Cash Deposit Score" score={sectionScore} />
    </>
  );
}
