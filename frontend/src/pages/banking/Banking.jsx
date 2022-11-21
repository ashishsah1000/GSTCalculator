import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import BIcbr from "./Icbr/Blcbr";
import FinalScore from "../../composite/FinalScore/FinalScore";
import { Link, Route, Routes } from "react-router-dom";
import Bocbr from "./bocbr/Bocbr";
import Bcds from "./bcds/Bcds";
import Bes from "./bes/Bes";
import Bclur from "./bclur/Bclur";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export default function Banking() {
  const [gstCondition, setgstCondition] = useState([
    { name: "Inward Cheque Bounce Ratio", target: "icbr", active: true },
    { name: "Outward Cheque Bounce Ratio", target: "ocbr", active: false },
    { name: "Cash Deposit Score", target: "cds", active: false },
    { name: "Emi Score", target: "emis", active: false },
    { name: "Credit Limit Utilization Ratio", target: "clur", active: false },
  ]);
  const [gstFinalScore, setgstFinalScore] = useState(0);
  let copy = [];

  //   const gstCondition = [
  //     { name: "Inward Cheque Bounce Ratio", target: "icbr", active: true },
  //     { name: "Outward Cheque Bounce Ratio", target: "ocbr", active: false },
  //     { name: "Cash Deposit Score", target: "cds", active: false },
  //     { name: "Emi Score", target: "emis", active: false },
  //     { name: "Credit Limit Utilization Ratio", target: "clur", active: false },
  //   ];
  const updategstScoreCallback = (value) => {
    console.log("reciving ", value);
    setgstFinalScore(parseInt(gstFinalScore) + parseInt(value));
  };
  // let { path, url } = useRouteMatch();

  return (
    <div style={{ display: "flex", marginTop: "20px", padding: "40px 40px" }}>
      <Box sx={{ width: "300px", borderRight: ".5px solid rgba(22,22,22,.2)" }}>
        {gstCondition.map((x, i) => {
          return (
            <Link
              to={`/main/banking/${x.target}`}
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
                  transition: ".5s ease-in-out",
                }}
                onClick={() => {
                  gstCondition.map((y) => {
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
            maxHeight: "50vh",
            overflowY: "scroll",
          }}
        >
          {/* {gstCondition[0].active == true ? (
            <>
              <GIcbr updateGstScore={updategstScoreCallback} />
            </>
          ) : (
            <></>
          )}
          {gstCondition[1].active == true ? (
            <>
              <Gocbr updateGstScore={updategstScoreCallback} />
            </>
          ) : (
            <></>
          )}
          {gstCondition[2].active == true ? (
            <>
              <Gcds updateGstScore={updategstScoreCallback} />
            </>
          ) : (
            <></>
          )}
          {gstCondition[3].active == true ? (
            <>
              <Ges updateGstScore={updategstScoreCallback} />
            </>
          ) : (
            <></>
          )}
          {gstCondition[4].active == true ? (
            <>
              <Gclur updateGstScore={updategstScoreCallback} />
            </>
          ) : (
            <></>
          )} */}
          <Routes>
            <Route
              exact
              path="/main/banking/icbr"
              element={<BIcbr updateGstScore={updategstScoreCallback} />}
            />
            <Route
              exact
              path="/main/banking/ocbr"
              element={<Bocbr updateGstScore={updategstScoreCallback} />}
            />
            <Route
              exact
              path="/main/banking/cds"
              element={<Bcds updateGstScore={updategstScoreCallback} />}
            />
            <Route
              exact
              path="/main/banking/emis"
              element={<Bes updateGstScore={updategstScoreCallback} />}
            />
            <Route
              exact
              path="/main/banking/clur"
              element={<Bclur updateGstScore={updategstScoreCallback} />}
            />
            <Route
              exact
              path="*"
              element={<BIcbr updateGstScore={updategstScoreCallback} />}
            />
          </Routes>
        </Box>
      </Box>
      <Box sx={{ width: "200px" }}>
        <FinalScore type="banking" />
      </Box>
    </div>
  );
}
