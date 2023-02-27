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
            <h1>{totalBillPerPerson}</h1>
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
