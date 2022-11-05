import { Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./banner.css"

export default function Banner() {
    const [title, setTitle] = useState("GST");

  return (
    <div className="banner">
      <div className="heading">
        <span className="firHead">{title} Calculator | Get CC & GST Score</span>
        <span className="secHead">
          The formula that gets you the score | Export and more
        </span>
      </div>
      <div className="btns">
        <div>
          <Link to="/main/gst">
            <button className="BankingBtn" onClick={() => setTitle("GST")}>
              GST Data
            </button>
          </Link>
          <Link to="/main/banking">
            <button className="BankingBtn" onClick={() => setTitle("Banking")}>
              Banking Data
            </button>
          </Link>
        </div>
        <Button variant="outlined" color="primary">
          ADMIN PANNEL
        </Button>
      </div>
    </div>
  );
}
