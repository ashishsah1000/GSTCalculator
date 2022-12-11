import React from "react";
import "./FinalScore.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Chip } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import banking, { changeValuesBanking } from "../../features/banking";

export default function FinalChips({ score = 96, type = "banking" }) {
  const [data, setdata] = useState({});
  const bankingStatus = useSelector((state) => state.banking.bankingData);
  const gstStatus = useSelector((state) => state.gst.gstData);
  const bereauStatus = useSelector((state) => state.bereau.bereauData);

  // console.log("from redux", gstStatus);
  const [finalScore, setFinalScore] = useState(0);
  var bankingSum = 0,
    gstSum = 0,
    bereauSum = 0;
  var dispatch = useDispatch();

  Object.entries(bankingStatus).map(([key, value]) => {
    // console.log(value);
    if (value !== undefined && key != "sum") {
      bankingSum = bankingSum + value;
    }
  });
  Object.entries(gstStatus).map(([key, value]) => {
    // console.log(value);
    if (value !== undefined && key != "sum") {
      gstSum = gstSum + value;
    }
  });
  Object.entries(bereauStatus).map(([key, value]) => {
    // console.log(value);
    if (value !== undefined && key != "sum") {
      bereauSum = bereauSum + value;
    }
  });

  useEffect(() => {
    if (type == "banking") {
      setdata(bankingStatus);
      setFinalScore(bankingSum);
    } else if (type == "gst") {
      setdata(gstStatus);
      setFinalScore(gstSum);
    } else if (type == "bereau") {
      setdata(bereauStatus);
      setFinalScore(bereauSum);
    }
  }, [bankingSum, gstSum, bereauSum]);
  return (
    <div className="chipScore" style={{}}>
      <span>
        {finalScore} / {type == "gst" ? 310 : ""}
        {type == "banking" ? 200 : ""}
        {type == "bereau" ? 330 : ""}
      </span>
    </div>
  );
}
