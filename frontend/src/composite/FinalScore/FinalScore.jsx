import React from "react";
import "./FinalScore.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Chip } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import banking, { changeValuesBanking } from "../../features/banking";

export default function FinalScore({ score = 96, type = "banking" }) {
  const [data, setdata] = useState({});
  const bankingStatus = useSelector((state) => state.banking.bankingData);
  const gstStatus = useSelector((state) => state.gst.gstData);
  console.log("from redux", gstStatus);
  const [finalScore, setFinalScore] = useState(0);
  var bankingSum = 0,
    gstSum = 0;
  var dispatch = useDispatch();

  Object.entries(bankingStatus).map(([key, value]) => {
    console.log(value);
    if (value !== undefined && key != "sum") {
      bankingSum = bankingSum + value;
    }
  });
  Object.entries(gstStatus).map(([key, value]) => {
    console.log(value);
    if (value !== undefined && key != "sum") {
      gstSum = gstSum + value;
    }
  });

  useEffect(() => {
    if (type == "banking") {
      setdata(bankingStatus);
      setFinalScore(bankingSum);
    } else if (type == "gst") {
      setdata(gstStatus);
      setFinalScore(gstSum);
    }
  }, [bankingSum, gstSum]);
  return (
    <div className="sidScore">
      <div className="scorce">
        <span>{finalScore}</span>
      </div>
      <div className="abtScore">
        <span className="ScrHead">Total cc Score</span>
        <span className="abtScr">Some other point that</span>
        <span className="abtScr">we can add</span>
      </div>
      <div
        style={{
          padding: "20px 20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Object.entries(data).map(([key, value]) => {
          if (value == undefined) {
            return (
              <Chip
                style={{ margin: "2px" }}
                label={key}
                color="primary"
                variant="outlined"
              />
            );
          } else {
            return (
              <Chip
                style={{ margin: "2px" }}
                label={key}
                color="success"
                variant="filled"
              />
            );
          }
        })}
      </div>
      <div className="scrBtns">
        <Button
          variant="contained"
          sx={{ marginTop: "20px", background: "#1e1a55" }}
        >
          Calculate
        </Button>
        <Button variant="contained" color="warning" sx={{ marginTop: "20px" }}>
          Save Data
        </Button>
      </div>
    </div>
  );
}
