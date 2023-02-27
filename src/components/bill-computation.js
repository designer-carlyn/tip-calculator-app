import React, { useState } from "react";

import {
  TextField,
  InputAdornment,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";

const BillComputation = ({
  totalBill,
  numberOfPeople,
  propsTipPercentage,
  propsChooseTip,
}) => {
  const [value, setValue] = useState("");

  const getAllRadioButton = document.querySelectorAll(".MuiRadio-root");

  const handleChange = (event) => {
    let value = event.target.value;
    setValue(value);
    propsChooseTip(value);
  };

  const onChangeCustomTip = (event) => {
    let value = event.target.value;
    propsTipPercentage(value);
    getAllRadioButton.forEach((element) => {
      element.classList.remove("Mui-checked");
    });
  };

  const percentageTip = ["5", "10", "15", "25", "50"];

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
          <RadioGroup
            value={value}
            onChange={handleChange}
            name="radio-buttons-group"
          >
            {percentageTip.map((tip, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={tip}
                  control={<Radio disableRipple />}
                  label={tip + "%"}
                />
              );
            })}
            <TextField
              onChange={onChangeCustomTip}
              id="custom-tip"
              type="number"
              placeholder="CUSTOM"
              fullWidth
              InputProps={{ inputProps: { min: 0 } }}
            />
          </RadioGroup>
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
