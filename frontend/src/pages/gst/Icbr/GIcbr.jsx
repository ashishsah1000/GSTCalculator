import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Fade, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
export default function Gicbr({ updateGstScore =()=>{}}) {
  const [sectionScore, setsectionScore] = useState(0);
  const [formReset, setformReset] = useState(false);

  // // number of inward bounce group transactions
  // const [nibgt, setnibgt] = useState(0)
  // // number of debit group transactions
  // const [ndcgt, setndcgt] = useState(0)
  // // number of debit group transactions
  // const [ndcgt, setndcgt] = useState(0)
  let nibgt = 0,
    ndcgt = 0,
    ndvpt = 0;

  const resetformElement = () => {
    var element = document.querySelector(".gicr-form");
    element.reset();
    setformReset(!formReset);
  };
  const handleCalculateIcbr = (a, b, c) => {
    console.log(a + " " + b + " " + c);
    var calculation = parseFloat(a) * (100 / (parseFloat(b) + parseFloat(c)));
    console.log(calculation);
    if (calculation <= 1) {
      setsectionScore(80);
          updateGstScore(sectionScore);
    } else if (calculation > 1 && calculation <= 3) {
      setsectionScore(40);
          updateGstScore(sectionScore);
    } else {
      setsectionScore(0);
          updateGstScore(sectionScore);
    }

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
              GST | INWARD CHEQUE BOUNCE RATIO
            </Typography>
            <Typography variant="p" sx={{ color: "rgba(22,22,22,.5)" }}>
              We can calculate the ICBR with this ratio
            </Typography>
            <br />
            <form className="gicr-form">
              <Box sx={{ marginTop: "20px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      type={"number"}
                      label="No of Inward Bounce Transactions"
                      sx={{ width: "100%", marginTop: "10px" }}
                      name="No of Inward Bounce Transactions"
                      onChange={(e) => {
                        nibgt = e.target.value;
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type={"number"}
                      label="No of Debit Cheque Transactions"
                      sx={{ width: "100%", marginTop: "10px" }}
                      name="No of Debit Cheque Transactions"
                      onChange={(e) => {
                        ndcgt = e.target.value;
                      }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      type={"number"}
                      label="No of Vendor Payement Transactions"
                      sx={{ width: "100%", marginTop: "10px" }}
                      name="No of Vendor Payement Transactions"
                      onChange={(e) => {
                        ndvpt = e.target.value;
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
                size="large"
                disabled={formReset}
                sx={{ background: "#1E1A55" }}
                onClick={() => {
                  handleCalculateIcbr(nibgt, ndcgt, ndvpt);
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

      <SectionScore title="Inward Cheque Bounce Ratio" score={sectionScore} />
    </>
  );
}
