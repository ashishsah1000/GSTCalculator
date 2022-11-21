import React, { useState } from "react";
import { Box } from "@mui/system";
import { Select, MenuItem, OutlinedInput, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { bcvMergedData } from "../../../data/gst";
import { useDispatch } from "react-redux";
import { changeValueGst } from "../../../features/gst";
export default function Gbcs() {
  const [sectionScore, setsectionScore] = useState(0);
  const [bct, setbct] = useState("");
  const [relation, setrelation] = useState("");
  let numberofApllicants = 0;
  const dispatch = useDispatch();
  const handleCalculateIcbr = (a) => {
    var str = (bct + relation + a).split(" ").join("");
    var score = 0;
    bcvMergedData.map((x) => {
      if (x.value == str) {
        score = x.ccScore;
      }
    });
    setsectionScore(score);
    dispatch(changeValueGst({ value: score, type: "bcs" }));
  };
  const BuisnessConstituionType = [
    "proprietorhsip",
    "public limited",
    "patner",
  ];
  const relations = ["director", "patner"];

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
            GST | BUISNESS CONSTITUTION SCORE
          </Typography>
          <Typography variant="p" sx={{ color: "rgba(22,22,22,.5)" }}>
            We can calculate the Buisness Constitution Score
          </Typography>
          <br />

          <Box sx={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="demo-multiple-name-label">BC Type</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={bct}
                    onChange={(e) => {
                      setbct(e.target.value);
                    }}
                    input={<OutlinedInput label="Name" />}
                    // MenuProps={MenuProps}
                  >
                    {BuisnessConstituionType.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        // style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="demo-multiple-name-label">
                    Relation
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={relation}
                    onChange={(e) => {
                      setrelation(e.target.value);
                    }}
                    input={<OutlinedInput label="Name" />}
                    // MenuProps={MenuProps}
                  >
                    {relations.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        // style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <TextField
                    type={"number"}
                    label="Number of Applicants"
                    sx={{ width: "100%" }}
                    name="email"
                    onChange={(e) => {
                      numberofApllicants = e.target.value;
                    }}
                  />
                </FormControl>
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
                handleCalculateIcbr(numberofApllicants);
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
