import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValuesBanking } from "../../../features/banking";
export default function Bclur({ updateGstScore = () => {} }) {
  const [sectionScore, setsectionScore] = useState(0);
  const [formReset, setformReset] = useState(false);
  // // number of inward bounce group transactions we do not require useState
  const dispatch = useDispatch();
  // const [nom, setnom] = useState(0)
  // // number of debit group transactions
  // const [stam, setstam] = useState(0)
  // // number of debit group transactions
  // const [nccgt, setnccgt] = useState(0)
  let nom = 0,
    stam = 0,
    sacl = 0,
    alm = 0;
  //  todo clear the document all input elements
  const resetformElement = () => {
    var element = document.querySelector(".gocbr-form");
    element.reset();
    setformReset(!formReset);
  };
  const handleCalculateGocbr = (a, b, d) => {
    let finalValue = 0;
   let c = parseFloat(a) / parseFloat(b);
    var alump = (parseFloat(c) / parseFloat(d)) * 100;
    console.log(a + " " + b + " " + c);
    var calculation = alump;
    var slcheck = parseFloat(d) > 0 ? true : false;
    if (calculation < 0.4) {
      setsectionScore(10);
      finalValue=10
    } else if (calculation > 0.4 && calculation <= 0.8) {
      setsectionScore(80);
      finalValue=80
    } else if (calculation > 0.8 && calculation <= 1) {
      setsectionScore(40);
      finalValue=40
    } else if (calculation > 1 && calculation <= 1.2) {
      setsectionScore(20);
      finalValue=20
    } else {
      setsectionScore(0);
        finalValue=0
          }
          dispatch(changeValuesBanking({type:"clur",value:finalValue}))
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
              Banking | CREDIT LIMIT UTILIZATION RATIO
            </Typography>
            <Typography variant="p" sx={{ color: "rgba(22,22,22,.5)" }}>
              We can calculate the credit limit utilization ratio
            </Typography>
            <br />
            <form className="gocbr-form">
              <Box sx={{ marginTop: "20px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      type={"text"}
                      label="Sum of all months"
                      sx={{ width: "100%", marginTop: "10px" }}
                      name="text"
                      onChange={(e) => {
                        nom = e.target.value;
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type={"text"}
                      label="No Of Months"
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
                      label="Sanctioned Limit"
                      sx={{ width: "100%", marginTop: "10px" }}
                      name="text"
                      onChange={(e) => {
                        sacl = e.target.value;
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
                  handleCalculateGocbr(nom, stam, sacl);
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

      <SectionScore
        title="Credit Limit Utilization Ratio"
        score={sectionScore}
      />
    </>
  );
}
