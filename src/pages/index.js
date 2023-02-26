import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid } from "@mui/material";

/* Import Components */
import BillComputation from "../components/bill-computation";
import BillResult from "../components/bill-result";

/* Import Style */
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "../scss/layout/index.scss";
import "../scss/components/tip-calculator.scss";

const IndexPage = () => {
  const [totalBill, setTotalBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState(0);

  const onChangeTotalBill = (event) => {
    const value = event.target.value;
    setTotalBill(value);
  };

  const onClickPropsChooseTip = (value) => {
    setTipPercentage(value / 100);
  };

  const onChangeTipPercentage = (event) => {
    const value = event.target.value;
    setTipPercentage(value / 100);
  };

  function onChangeNumberOfPeople(event) {
    const value = event.target.value;
    setNumberOfPeople(value);
  }

  if (!isFinite(tipAmount) || isNaN(tipAmount)) {
    setTipAmount("0.00");
    setTotal("0.00");
  }

  useEffect(() => {
    const getTotaTipPercentage = (totalBill * tipPercentage).toFixed(2);
    setTipAmount((getTotaTipPercentage / numberOfPeople).toFixed(2));

    const getTotalBillPerPerson = totalBill / numberOfPeople + +tipAmount;
    setTotal(getTotalBillPerPerson.toFixed(2));
  }, [totalBill, tipAmount, tipPercentage, numberOfPeople]);

  return (
    <main className="tip-calculator">
      <div className="tip-calculator__header">
        <h1>
          SPLI <br /> TTER
        </h1>
      </div>
      <div className="tip-calculator__card">
        <Card elevation={0}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6} sm={6} xs={12}>
                <BillComputation
                  totalBill={onChangeTotalBill}
                  propsChooseTip={onClickPropsChooseTip}
                  propsTipPercentage={onChangeTipPercentage}
                  numberOfPeople={onChangeNumberOfPeople}
                ></BillComputation>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <BillResult
                  tipAmountPerson={tipAmount}
                  totalBillPerPerson={total}
                ></BillResult>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
      <br />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
