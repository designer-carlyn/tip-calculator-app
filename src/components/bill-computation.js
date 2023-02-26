import React from "react";

import { TextField, InputAdornment, Button } from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";

const BillComputation = ({
  totalBill,
  numberOfPeople,
  propsTipPercentage,
  propsChooseTip,
}) => {
  const percentageTip = ["5", "10", "15", "25", "50"];

  const chooseTip = (event, index, value) => {
    propsChooseTip(value);
  };

  return (
    <div className="tip-calculator__computation">
      {/* Start Bill */}
      <div className="tip-calculator__computation-item tip-calculator__computation--bill">
        <div className="item-label">Bill</div>
        <TextField
          onChange={totalBill}
          type="number"
          fullWidth
          placeholder="0.00"
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
          {percentageTip.map((tip, index) => {
            return (
              <Button
                variant="contained"
                disableElevation
                key={index}
                id={index}
                onClick={(event) => chooseTip(event, index, tip)}
              >
                {tip}%
              </Button>
            );
          })}
          <TextField
            onChange={propsTipPercentage}
            id="bill-amount"
            type="number"
            placeholder="CUSTOM"
            fullWidth
            InputProps={{ inputProps: { min: 0 } }}
          />
        </div>
      </div>
      {/* End Select Tip */}

      {/* Start Number of People */}
      <div className="tip-calculator__computation-item tip-calculator__computation--people">
        <div className="item-label">Number of People</div>
        <TextField
          onChange={numberOfPeople}
          type="number"
          fullWidth
          placeholder="0"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
            inputProps: { min: 0 },
          }}
        />
      </div>
      {/* End Number of People */}
    </div>
  );
};

export default BillComputation;
