import React, { useState } from "react";
import Mbcds from "../banking/bcds/Mbcds";
import Mbclur from "../banking/bclur/Mbclur";
import {
  Mbes,
  Mbocbr,
  Micbr,
  Mgaos,
  Mgas,
  Mgbcs,
  Mgmgs,
  Mgpis,
  Mgssc,
  Mgvcs,
  Mgvs,
} from "..";
import Mgsis from "../gst/gsis/Mgsis";
import FinalChips from "../../composite/FinalScore/FinalChips";
import { Ues } from "../bereau";
import { Uce } from "../bereau";
import { Ucibsrc } from "../bereau";
import { Uals } from "../bereau";
import { Utus } from "../bereau";
import { Urhs } from "../bereau";
import { Uwso } from "../bereau";
import { Button } from "@mui/material";
import { changeValuesBanking } from "../../features/banking";

import { useDispatch } from "react-redux";
import { changeValueBereau } from "../../features/bereau";
import { changeValueGst } from "../../features/gst";

export default function All() {
  const dispatch = useDispatch();
  const [bankingKey, setbankingKey] = useState(0);
  const [gstKey, setgstKey] = useState(1);
  const [bureueKey, setbureueKey] = useState(2);
  function generateRandomKey(type) {
    var x = Math.random();
    if (type == "banking") {
      setbankingKey(x);
    } else if (type == "gst") {
      setgstKey(x);
    } else {
      setbureueKey(x);
    }
  }
  return (
    <div className="all">
      <div
        className="banking-section"
        key={bankingKey}
        style={{ padding: "40px 40px" }}
      >
        <div className="flex">
          <h1>Banking </h1>
          <div>
            <FinalChips type="banking" />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                generateRandomKey("banking");
                dispatch(changeValuesBanking({ type: "reset" }));
              }}
            >
              Reset
            </Button>
          </div>
        </div>

        <Mbcds />
        <Mbclur />
        <Mbes />
        <Mbocbr />
        <Micbr />
      </div>
      <div key={gstKey} style={{ padding: "40px 40px" }}>
        <div className="flex">
          <h1>GST </h1>
          <div>
            <FinalChips type="gst" />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                generateRandomKey("gst");
                dispatch(changeValueGst({ type: "reset" }));
              }}
            >
              Reset
            </Button>
          </div>
        </div>
        <Mgaos />
        <Mgas />
        <Mgbcs />
        <Mgmgs />
        <Mgpis />
        <Mgsis />
        <Mgssc />
        <Mgvcs />
        <Mgvs />
      </div>
      <div key={bureueKey} style={{ padding: "40px 40px" }}>
        <div className="flex">
          <h1>Bereau</h1>
          <div>
            <FinalChips type="bereau" />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                generateRandomKey("buruea");
                dispatch(changeValueBereau({ type: "reset" }));
              }}
            >
              Reset
            </Button>
          </div>
        </div>
        <Ues />
        <Uce />
        <Ucibsrc />
        <Uals />
        <Utus />
        <Urhs />
        <Uwso />
      </div>
    </div>
  );
}
