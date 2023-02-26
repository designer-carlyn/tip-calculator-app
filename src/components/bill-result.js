import React from "react";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Button } from "@mui/material";

const BillResult = ({ tipAmountPerson }) => {
  return (
    <div className="tip-calculator__result">
      <div className="tip-calculator__result-tip">
        <div className="tip-item">
          <div className="tip-title">
            <h4>Tip Amount</h4>
            <small>/ person</small>
          </div>
          <div className="tip-amount">
            <AttachMoneyIcon></AttachMoneyIcon>
            <h1>{tipAmountPerson}</h1>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-title">
            <h4>Total</h4>
            <small>/ person</small>
          </div>
          <div className="tip-amount">
            <AttachMoneyIcon></AttachMoneyIcon>
            <h1>32.79</h1>
          </div>
        </div>
        <div className="tip-reset">
          <Button variant="contained" disableElevation fullWidth>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillResult;
