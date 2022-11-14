import React,{useState} from "react";
import { Box, Container } from "@mui/system";
import FinalScore from "../../composite/FinalScore/FinalScore";
import { Routes,Route,Link } from "react-router-dom";
import Gpis from "./gpis/Gpis";
import Gbcs from "./gbcs/Gbcs";
import Gvs from "./gvs/Gvs";
import Gsis from "./gsis/Gsis";
import Gmgs from "./gmgs/Gmgs";
import Gvcs from "./gvcs/Gvcs";
import Gssc from "./gssc/Gssc";
import Gas from "./gas/Gas";
import Gaos from "./gaos/Gaos";

export default function Gst() {
   const [gstConditions, setgstCondition] = useState([
    { name: "Primary Industry Score", target: "pis", active: true },
    { name: "Buisness Constitution Score", target: "bcs", active: false },
    { name: "Vintage Score", target: "vs", active: false },
    { name: "Secondary Industry Score", target: "sis", active: false },
    { name: "Monthly Growth Score", target: "mgs", active: false },
    { name: "Vendor Concentration Score", target: "vcs", active: false },
    { name: "Sale Score", target: "ssc", active: false },
    { name: "Age Score", target: "asc", active: false },
    { name: "Asset Ownership Score", target: "aos", active: false },
  ])
  let copy=[]

  return (
    <div style={{ display: "flex", marginTop: "20px", padding: "40px 40px" }}>
      <Box
        sx={{
          width: "300px",
          borderRight: ".5px solid rgba(22,22,22,.2)",
          maxHeight: "80vh",
          overflowY: "scroll",
        }}
      >
        {gstConditions.map((x, i) => {
          return (
            <Link
              to={`/main/gst/${x.target}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                key={Math.random()}
                sx={{
                  height: "50px",
                  width: "200px",
                  margin: "0px auto",
                  marginTop: "20px",
                  background: x.active ? "#1976d2" : "#fcfcfc",
                  padding: "10px 20px",
                  fontWeight: 400,
                  cursor: "pointer",
                  color: x.active ? "ghostwhite" : "rgba(22,22,22,.7)",
                  borderRadius: "4px",
                }}
                onClick={() => {
                  gstConditions.map((y) => {
                    copy.push({ ...y, active: false });
                  });
                  copy[i].active = true;
                  console.log(copy);
                  setgstCondition([...copy]);
                }}
              >
                {x.name}
              </Box>
            </Link>
          );
        })}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          borderRight: ".5px solid rgba(22,22,22,.2)",
        }}
      >
        <Box
          sx={{
            margin: "0px auto",
            padding: "20px 20px",
            maxHeight: "80vh",
            overflowY: "scroll",
          }}
        >
          <Routes>
            <Route path="/pis" element={<Gpis />}></Route>
            <Route path="/sis" element={<Gsis />}></Route>
            <Route path="/vs" element={<Gvs />}></Route>
            <Route path="/asc" element={<Gas />}></Route>
            <Route path="/ssc" element={<Gssc />}></Route>
            <Route path="/mgs" element={<Gmgs />}></Route>
            <Route path="/vcs" element={<Gvcs />}></Route>
            <Route path="/bcs" element={<Gbcs />}></Route>
            <Route path="/aos" element={<Gaos />}></Route>
            <Route path="*" element={<Gpis />}></Route>
          </Routes>
        </Box>
      </Box>
      <Box sx={{ width: "200px" }}>
        <FinalScore />
      </Box>
    </div>
  );
}
