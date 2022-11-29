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

export default function All() {
  return (
    <div className="all">
      <div style={{ padding: "40px 40px" }}>
        <h1>Banking</h1>
        <Mbcds />
        <Mbclur />
        <Mbes />
        <Mbocbr />
        <Micbr />
      </div>
      <div style={{ padding: "40px 40px" }}>
        <h1>GST</h1>
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
