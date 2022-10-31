import React from 'react'
import "./sectionScore.css"

export default function SectionScore({score=0}) {
  return (
    <div >
     
      <div className="inward">
        <div>
          <span className="num">{score}</span>
        </div>

        <div className="abtInward">
          <span className="inwardHead">Inward Check Counce Ratio Score</span>
          <span className="abtinw">
            As per the formula and the status that we have current CC Score for
            the Inward Check Bounce Score
          </span>
          <span className="abtinw">
            Score is calculated by internal formulas and methods
          </span>
          <span className="abtinw">
            This is not the final score but the sectional CC score.
          </span>
        </div>
      </div>

    </div>
  );
}
