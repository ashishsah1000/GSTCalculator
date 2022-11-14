import React,{useState} from 'react'
import { Box } from '@mui/system'
import {Select,MenuItem,OutlinedInput,InputLabel} from '@mui/material';
import FormControl from "@mui/material/FormControl";
import { Button, Typography } from '@mui/material';
import {TextField} from '@mui/material';
import Grid from "@mui/material/Grid";
import { SectionScore } from '../../../composite';
export default function Gpis() {
const [sectionScore, setsectionScore] = useState(0)
  // // number of inward bounce group transactions
  // const [nibgt, setnibgt] = useState(0)
  // // number of debit group transactions
  // const [ndcgt, setndcgt] = useState(0)
  // // number of debit group transactions
  // const [ndcgt, setndcgt] = useState(0)
 const [pIndus, setpIndus] = useState("")
 const [sIndus, setsIndus] = useState("")
 const types ="";
  let nibgt=0,ndcgt=0,ndvpt=0;
  const handleCalculateIcbr = (a,b,c)=>{
    console.log(a+" "+b+" "+c)
    var calculation = parseInt(a)*(100/(parseInt(b)+parseInt(c)));
    console.log(calculation);
    if(calculation<=1){
      setsectionScore(80)
    }
    else if(calculation>1 && calculation<=3){
      setsectionScore(40)
    }
    else{
      setsectionScore(0);
    }
  }
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
   console.log(value)
   setpIndus(value)
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
            GST | PRIMARY INDUSTRY SCORE
          </Typography>
          <Typography variant="p" sx={{ color: "rgba(22,22,22,.5)" }}>
            We can calculate the Primary Industry Score
          </Typography>
          <br />

          <Box sx={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="demo-multiple-name-label">
                    Primary Industry
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={pIndus}
                    onChange={(e) => {
                      setpIndus(e.target.value);
                    }}
                    input={<OutlinedInput label="Name" />}
                    // MenuProps={MenuProps}
                  >
                    {names.map((name) => (
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
                    Secondary Industry
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={sIndus}
                    onChange={(e) => {
                      setsIndus(e.target.value);
                    }}
                    input={<OutlinedInput label="Name" />}
                    // MenuProps={MenuProps}
                  >
                    {names.map((name) => (
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
                    type={"email"}
                    label="Type"
                    sx={{ width: "100%" }}
                    name="email"
                    onChange={(e) => {
                      ndvpt = e.target.value;
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
                handleCalculateIcbr(nibgt, ndcgt, ndvpt);
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
