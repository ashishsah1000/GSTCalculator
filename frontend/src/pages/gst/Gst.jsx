import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import GIcbr from "./Icbr/GIcbr";
import FinalScore from "../../composite/FinalScore/FinalScore";
import { Link, Route, Routes } from "react-router-dom";
import Gocbr from "./Gocbr/Gocbr";
import Gcds from "./gcds/Gcds";


export default function Gst() {
    const [gstCondition, setgstCondition] = useState([
      { name: "Inward Cheque Bounce Ratio", target: "icbr", active: true },
      { name: "Outward Cheque Bounce Ratio", target: "ocbr", active: false },
      { name: "Cash Deposit Score", target: "cds", active: false },
      { name: "Emi Score", target: "emis", active: false },
      { name: "Credit Limit Utilization Ratio", target: "clur", active: false },
    ]);
    let copy=[]
//   const gstCondition = [
//     { name: "Inward Cheque Bounce Ratio", target: "icbr", active: true },
//     { name: "Outward Cheque Bounce Ratio", target: "ocbr", active: false },
//     { name: "Cash Deposit Score", target: "cds", active: false },
//     { name: "Emi Score", target: "emis", active: false },
//     { name: "Credit Limit Utilization Ratio", target: "clur", active: false },
//   ];

  return (
    <div style={{ display: "flex", marginTop: "20px", padding: "40px 40px" }}>
      <Box sx={{ width: "300px", borderRight: ".5px solid rgba(22,22,22,.2)" }}>
        {gstCondition.map((x,i) => {
          return (
            <Link to={`/main/gst/${x.target}/`} style={{textDecoration:"none"}}>
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
                  transition:".5s ease-in-out"
                }}
                onClick={()=>{
                    gstCondition.map((y) => {
                        copy.push({...y,active:false})
                    });
                    copy[i].active=true;
                        console.log(copy);
                        setgstCondition([...copy])

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
            maxHeight: "50vh",
            overflowY: "scroll",
          }}
        >
          <Routes>
            <Route exact path="/main/gst/icbr" element={<GIcbr />} />
            <Route exact path="/main/gst/ocbr" element={<Gocbr />} />
            <Route exact path="/main/gst/cds" element={<Gcds />} />
            <Route exact path="*" element={<GIcbr />} />
          </Routes>
        </Box>
      </Box>
      <Box sx={{ width: "200px" }}>
        <FinalScore />
      </Box>
    </div>
  );
}
