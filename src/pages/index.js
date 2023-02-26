import * as React from "react";
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
                <BillComputation></BillComputation>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <BillResult></BillResult>
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
