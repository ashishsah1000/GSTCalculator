import React from 'react'
import "./banner.css"

export default function Banner() {
  return (
    <div className="banner">
      <div className="heading">
        <span className="firHead">Calculator | Get CC & GST Score</span>
        <span className="secHead">
          The formula that gets you the score | Export and more
        </span>
      </div>
      <div className="btns">
        <button className="BankingBtn">Banking Data</button>
        <button className="admBtn">ADMIN PANNEL</button>
      </div>
    </div>
  );
}
