import React from "react";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Button } from "@mui/material";

const BillResult = ({
  tipAmountPerson,
  totalBillPerPerson,
  tipResetDisabled,
  resetComputation,
}) => {
  return (
    <div className="tip-calculator__result">
      <div className="tip-calculator__result-tip">
        <div className="tip-item">
          <div className="tip-title">
            <h1>Tip Amount</h1>
            <small>/ person</small>
          </div>
          <div className="tip-amount">
            <AttachMoneyIcon></AttachMoneyIcon>
            <h2>{tipAmountPerson}</h2>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-title">
            <h1>Total</h1>
            <small>/ person</small>
          </div>
          <div className="tip-amount">
            <AttachMoneyIcon></AttachMoneyIcon>
            <h2>{totalBillPerPerson}</h2>
          </div>
        </div>
        <div className="tip-reset">
          <Button
            variant="contained"
            disableElevation
            fullWidth
            disabled={tipResetDisabled}
            onClick={resetComputation}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillResult;
