import { memo, useRef, useEffect } from "react";
import "./treasury-dashboard.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { Paper, Grid, Box, Button, Zoom, Container, Divider, Link, useMediaQuery, Typography } from "@material-ui/core";
import { MarketCap, OHMPrice, WSOHMPrice, CircSupply, BackingPerOHM, CurrentIndex } from "./components/Metric/Metric";

import {
  TotalValueDepositedGraph,
  MarketValueGraph,
  RiskFreeValueGraph,
  ProtocolOwnedLiquidityGraph,
  OHMStakedGraph,
  RunwayAvailableGraph,
} from "./components/Graph/Graph";

const TreasuryDashboard = memo(() => {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");

  return (
    <div id="home-dashboard-view">
      <Box className="home-data-area">
        <Grid container spacing={2} className="home-container">
          <Grid item sm={12} lg={9} className="data-boxes">
            <Grid item xs={6} className="olympus-card">
              <Paper className="ohm-card-box">
                <Typography style={{ marginBottom: "8px" }}>APY</Typography>
                <Typography className="ohm-card-value" style={{ color: " #feb626 " }}>
                  2,000,000%
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} className="olympus-card">
              <Paper className="ohm-card-box">
                <Typography style={{ marginBottom: "8px" }}>$D3 Price</Typography>
                <Typography className="ohm-card-value">$10</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} className="olympus-card">
              <Paper className="ohm-card-box">
                <Typography style={{ marginBottom: "8px" }}>Market Cap</Typography>
                <Typography className="ohm-card-value">$5,000,000</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} className="olympus-card">
              <Paper className="ohm-card-box">
                <Typography style={{ marginBottom: "8px" }}>Backing per $D3</Typography>
                <Typography className="ohm-card-value">$10</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} className="olympus-card">
              <Paper className="ohm-card-box">
                <Typography style={{ marginBottom: "8px" }}>TVL</Typography>
                <Typography className="ohm-card-value">$5,000,000</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} className="olympus-card">
              <Paper className="ohm-card-box">
                <Typography style={{ marginBottom: "8px" }}>Next Rebase</Typography>
                <Typography className="ohm-card-value">
                  <strong>2 hrs, 27 mins</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} className="olympus-card">
              <Paper className="ohm-card-box">
                <Typography style={{ marginBottom: "8px" }}>Supply</Typography>
                <Typography className="ohm-card-value">30,000</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} className="olympus-card">
              <Paper className="ohm-card-box">
                <Typography style={{ marginBottom: "8px" }}>Burns</Typography>
                <Typography className="ohm-card-value">5000</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} className="olympus-card">
              <Paper className="ohm-card-box">
                <Typography style={{ marginBottom: "8px" }}>Treasury Balance</Typography>
                <Typography className="ohm-card-value">$1,000,000</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} className="olympus-card">
              <Paper className="ohm-card-box">
                <Typography style={{ marginBottom: "8px" }}>Runway</Typography>
                <Typography className="ohm-card-value">10 Days</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});

const queryClient = new QueryClient();

export default () => (
  <QueryClientProvider client={queryClient}>
    <TreasuryDashboard />
  </QueryClientProvider>
);
