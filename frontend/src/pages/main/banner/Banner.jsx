import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
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
        <div>
          <Link to="/main/gst">
            <button className="BankingBtn">GST Data</button>
          </Link>
          <Link to="/main/banking">
            <button className="BankingBtn">Banking Data</button>
          </Link>
        </div>
        <Button variant='outlined' color="primary">ADMIN PANNEL</Button>
      </div>
    </div>
  );
}
