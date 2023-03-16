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
  const [isDisabled, setIsDisabled] = useState(true);
  const [querGetAllRadio, setQuerGetAllRadio] = useState(null);

  const onChangeTotalBill = (event) => {
    const value = event.target.value;
    setTotalBill(value);
    setIsDisabled(false);
  };

  const onClickPropsChooseTip = (value) => {
    setTipPercentage(value / 100);
    document.getElementById("custom-tip").value = "";
  };

  const onChangeTipPercentage = (value) => {
    setTipPercentage(value / 100);
  };

  const onClickResetComputation = () => {
    setTotalBill(0);
    document.getElementById("total-bill").value = "";
    setTipPercentage("");
    document.getElementById("custom-tip").value = "";
    setNumberOfPeople(0);
    document.getElementById("number-people").value = "";
    querGetAllRadio.forEach((element) => {
      element.classList.remove("Mui-checked");
    });
    setIsDisabled(true);
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

    const getAllRadioButton = document.querySelectorAll(".MuiRadio-root");
    setQuerGetAllRadio(getAllRadioButton);
  }, [totalBill, tipAmount, tipPercentage, numberOfPeople, isDisabled]);

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
                  tipResetDisabled={isDisabled}
                  resetComputation={onClickResetComputation}
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

export const Head = () => (
  <>
    <title>Tip Calculator App</title>
    <meta property="og:title" content="Tip Calculator App" />
    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      content="This tip calculator will help you to calculate the total bills per person and the tip you want to give."
    />
    <meta
      property="og:image"
      content="https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/tip-calculator-app_TwTR5hjoh2.webp?updatedAt=1678074114702"
    />
  </>
);
