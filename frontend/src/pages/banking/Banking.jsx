import React from "react";
import { Box, Container } from "@mui/system";
import Icbr from "./Icbr/Icbr";
import FinalScore from "../../composite/FinalScore/FinalScore";

export default function Banking() {
  const bankingCondition = [
    { name: "Inward Cheque Bounce Ratio", target: "icbr", active: true },
    { name: "Outward Cheque Bounce Ratio", target: "icbr", active: false },
    { name: "Cash Deposit Ratio", target: "icbr", active: false },
  ];

  return (
    <div style={{ display: "flex", marginTop: "20px",padding:"40px 40px" }}>
      <Box sx={{ width: "300px", borderRight: ".5px solid rgba(22,22,22,.2)" }}>
        {bankingCondition.map((x) => {
          return (
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
            >
              {x.name}
            </Box>
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
        <Box sx={{  margin: "0px auto",padding:"20px 20px",maxHeight:"50vh",overflowY:"scroll" }}>
          <Icbr />
        </Box>
      </Box>
      <Box sx={{ width: "200px" }}>
        <FinalScore />
      </Box>
    </div>
  );
}
