import React from "react";
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

export default function All() {
  return (
    <div className="all">
      <div style={{ padding: "40px 40px" }}>
        <div className="flex">
          <h1>Banking </h1>
          <div>
            <FinalChips type="banking" />
          </div>
        </div>

        <Mbcds />
        <Mbclur />
        <Mbes />
        <Mbocbr />
        <Micbr />
      </div>
      <div style={{ padding: "40px 40px" }}>
        <div className="flex">
          <h1>GST </h1>
          <div>
            <FinalChips type="gst" />
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
    </div>
  );
}
