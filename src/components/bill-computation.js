import React from "react";

import { TextField, InputAdornment, Button } from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";

const BillComputation = () => {
  const percentageTip = [5, 10, 15, 25, 50];

  return (
    <div className="tip-calculator__computation">
      {/* Start Bill */}
      <div className="tip-calculator__computation-item tip-calculator__computation--bill">
        <div className="item-label">Bill</div>
        <TextField
          id="bill-amount"
          type="number"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      {/* End Bill */}

      {/* Start Select Tip */}
      <div className="tip-calculator__computation-item tip-calculator__computation--tip">
        <div className="item-label">Select Tip %</div>
        <div className="item-tip-button">
          {percentageTip.map((tip) => {
            return (
              <Button variant="contained" disableElevation>
                {tip}%
              </Button>
            );
          })}
          <TextField
            id="bill-amount"
            type="number"
            placeholder="CUSTOM"
            fullWidth
          />
        </div>
      </div>
      {/* End Select Tip */}

      {/* Start Number of People */}
      <div className="tip-calculator__computation-item tip-calculator__computation--people">
        <div className="item-label">Number of People</div>
        <TextField
          id="number-people"
          type="number"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      {/* End Number of People */}
    </div>
  );
};

export default BillComputation;