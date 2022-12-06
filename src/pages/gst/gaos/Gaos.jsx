import React, { useState } from "react";
import { Box } from "@mui/system";
import { Select, MenuItem, OutlinedInput, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { addressMergedData } from "../../../data/gst";
import Grid from "@mui/material/Grid";
import { SectionScore } from "../../../composite";
import { useDispatch } from "react-redux";
import { changeValueGst } from "../../../features/gst";

export default function Gaos() {
  const [sectionScore, setsectionScore] = useState(0);
  const [adrType, setadrType] = useState("");
  const [residenceStatus, setresidenceStatus] = useState("");
  const [buisnessAddr, setbuisnessAddr] = useState("");
  const dispatch = useDispatch();

  const handleCalculateIcbr = () => {
    console.log("was called");
    var str = (adrType + residenceStatus + buisnessAddr).split(" ").join("");
    var score = 0;
    addressMergedData.map((x) => {
      console.log(x.value + " " + str);
      if (x.value == str) {
        score = x.ccScore;
      }
    });
    console.log(score);
    setsectionScore(score);
    dispatch(changeValueGst({ value: score, type: "aos" }));
  };
  const addressType = ["permanent", "current"];
  const residences = ["self owned"];
  const buisAddressOptions = ["godown/factory", "promoters residence address"];

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
          <Typography vari ant="h6" sx={{ fontWeight: 800, color: "#1e1a55" }}>
            GST | Asset Ownership Score
          </Typography>
          <Typography variant="p" sx={{ color: "rgba(22,22,22,.5)" }}>
            We can calculate the Asset Ownership Score
          </Typography>
          <br />

          <Box sx={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="demo-multiple-name-label">
                    Address Type
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={adrType}
                    onChange={(e) => {
                      setadrType(e.target.value);
                    }}
                    input={<OutlinedInput label="Name" />}
                    // MenuProps={MenuProps}
                  >
                    {addressType.map((name) => (
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
                    Residence
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={residenceStatus}
                    onChange={(e) => {
                      setresidenceStatus(e.target.value);
                    }}
                    input={<OutlinedInput label="Name" />}
                    // MenuProps={MenuProps}
                  >
                    {residences.map((name) => (
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
                    Buisness Address
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={buisnessAddr}
                    onChange={(e) => {
                      setbuisnessAddr(e.target.value);
                    }}
                    input={<OutlinedInput label="Name" />}
                    // MenuProps={MenuProps}
                  >
                    {buisAddressOptions.map((name) => (
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
                handleCalculateIcbr();
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
