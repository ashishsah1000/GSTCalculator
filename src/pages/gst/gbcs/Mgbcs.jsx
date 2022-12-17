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
export default function Mgbcs() {
  const [sectionScore, setsectionScore] = useState(0);
  const [bct, setbct] = useState("");
  const [relation, setrelation] = useState("");
  const [number, setNumber] = useState(0);
  let numberofApllicants = 0;
  const dispatch = useDispatch();
  const handleCalculateIcbr = (a) => {
    var str = (bct + relation + a).split(" ").join("");
    console.log(str);
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
          padding: "0px 10px",
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
                GST | BUISNESS CONSTITUTION SCORE
              </Typography>

              <Box sx={{ marginTop: "0px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <FormControl sx={{ m: 1, width: "100%" }}>
                      <InputLabel id="demo-multiple-name-label">
                        BC Type
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={bct}
                        onChange={(e) => {
                          setbct(e.target.value);
                          handleCalculateIcbr();
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
                  <Grid item xs={3}>
                    <FormControl sx={{ m: 1, width: "100%" }}>
                      <InputLabel id="demo-multiple-name-label">
                        Relation
                      </InputLabel>
                      <Select
                        disabled={bct.length > 0 ? false : true}
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={relation}
                        onChange={(e) => {
                          setrelation(e.target.value);
                          handleCalculateIcbr();
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

                  <Grid item xs={3}>
                    <FormControl sx={{ m: 1, width: "100%" }}>
                      <TextField
                        type={"number"}
                        label="Number of Applicants"
                        sx={{ width: "100%" }}
                        name="email"
                        onChange={(e) => {
                          numberofApllicants = e.target.value;
                          setNumber(e.target.value);
                          handleCalculateIcbr(e.target.value);
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
