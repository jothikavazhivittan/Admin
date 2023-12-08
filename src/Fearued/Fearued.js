import React from "react";
import "./fearued.css";
import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Fearued = () => {
  return (
    <div className='fearued'>
      <div className='top'>
        <h1 className='headline'>Total Revenue</h1>
        <MoreVert fontSize="small" />
        </div>
      <div className='bottons'>
          <div className='featuedchart'>
            <CircularProgressbar value={70} text='70%' strokeWidth={6} />
          </div>
          <p className='tile'>Total sales made today</p>
          <p className='amout'>$450</p>
          <p className='des'>
            Previous transactions processing.Last payments may not be included
          </p>
          <div className='summary'>
            <div className='items'>
              <div className='itemtitle '>Target</div>
              <div className='itemResult negative'>
                <KeyboardArrowDown fontSize="small"/>
                <div className='resultAmount'>$30.22</div>
              </div>
            </div>
            <div className='items'>
              <div className='itemtitle'>last week</div>
              <div className='itemResult posstive'>
                <KeyboardArrowUp fontSize="small"/>
                <div className='resultAmount'>$30.22</div>
              </div>
            </div>
            <div className='items'>
              <div className='itemtitle'>last month</div>
              <div className='itemResult posstive'>
                <KeyboardArrowUp fontSize="small"/>
                <div className='resultAmount'>$30.22</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Fearued;
