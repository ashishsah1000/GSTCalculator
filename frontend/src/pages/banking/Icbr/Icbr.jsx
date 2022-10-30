import React from 'react'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material';
import {TextField} from '@mui/material';
import Grid from "@mui/material/Grid";
import { SectionScore } from '../../../composite';
export default function Icbr() {
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
            INWARD CHEQUE BOUNCE RATIO
          </Typography>
          <Typography variant="p" sx={{color:"rgba(22,22,22,.5)"}}>
            We can calculate the ICBR with this ratio
          </Typography>
          <br />

          <Box sx={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  type={"email"}
                  label="No of Inward Bounce Transactions"
                  sx={{ width: "100%", marginTop: "10px" }}
                  name="email"
                  onChange={() => {}}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type={"email"}
                  label="No of Debit Cheque Transactions"
                  sx={{ width: "100%", marginTop: "10px" }}
                  name="email"
                  onChange={() => {}}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  type={"email"}
                  label="No of Vendor Payement Transactions"
                  sx={{ width: "100%", marginTop: "10px" }}
                  name="email"
                  onChange={() => {}}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type={"email"}
                  label="Other Inputs"
                  sx={{ width: "100%", marginTop: "10px" }}
                  name="email"
                  onChange={() => {}}
                />
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
            >
              GET SCORE
            </Button>
          </Box>
        </Box>
      </Box>

        <SectionScore />



    </>
  );
}
