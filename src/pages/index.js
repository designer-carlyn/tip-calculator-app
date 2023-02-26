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
  const [tipPercentage, setTipPercentage] = useState(0);
  // const [numberOfPeople, setTonumberOfPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  // const [total, setTotal] = useState(0);

  let getTotaTipPercentage = Math.round((totalBill / 100) * tipPercentage);

  console.log(getTotaTipPercentage);

  function onChangeTotalBill(event) {
    let value = event.target.value;
    setTotalBill(value);
  }

  function onClickPropsChooseTip(value) {
    setTipPercentage(value);
    setTipAmount(getTotaTipPercentage);
    console.log(value);
  }

  const onChangeTipPercentage = (event) => {
    let value = event.target.value;
    setTipPercentage(value);
    setTipAmount(getTotaTipPercentage);
  };

  function onChagenumberOfPeople(event) {
    let value = event.target.value;
    setTipPercentage(value);
  }

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
                  numberOfPeople={onChagenumberOfPeople}
                ></BillComputation>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <BillResult tipAmountPerson={tipAmount}></BillResult>
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
