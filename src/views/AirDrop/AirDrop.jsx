import { useState, useRef, useEffect, useMemo } from "react";
import { Box, Button, Fade, Paper, Tab, Tabs, Typography, Zoom, Grid } from "@material-ui/core";
import TabPanel from "../../components/TabPanel";
import "./airdrop.scss";
import { useWeb3Context } from "../../hooks/web3Context";
import ZapStakeAction from "./ZapStakeAction";
import ZapInfo from "./ZapInfo";
import { useAppSelector } from "../../hooks";
import { Trans } from "@lingui/macro";
import { usePathForNetwork } from "../../hooks/usePathForNetwork";
import { useHistory } from "react-router";

function AirDrop() {
  // const { address, connect } = useWeb3Context();
  // const history = useHistory();
  // const networkId = useAppSelector(state => state.network.networkId);
  // usePathForNetwork({ pathName: "zap", networkID: networkId, history });

  // const tokens = useAppSelector(state => state.zap.balances);
  // const inputTokenImages = useMemo(
  //   () =>
  //     Object.entries(tokens)
  //       .filter(token => token[0] !== "sohm")
  //       .map(token => token[1].img)
  //       .slice(0, 3),
  //   [tokens],
  // );

  return (
    <div id="airdropContainer">
      <h1>Airdrops</h1>
      <div id="airdrop-view">
        <Grid xs={12} container spacing={2}>
          <Grid item xs={12} md={3}>
            <div className="airdrop-card-view">
              <Paper className="ohm-card">
                <Box className="" style={{ paddingBottom: "16px" }}>
                  <Typography variant="h5">Diamond Hands</Typography>
                </Box>
                <Box className="" style={{ paddingBottom: "24px" }}>
                  <Typography variant="h3">0</Typography>
                </Box>
                <Button variant="contained" color="primary" className="connect-button">
                  Claim
                </Button>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="airdrop-card-view">
              <Paper className="ohm-card">
                <Box className="" style={{ paddingBottom: "16px" }}>
                  <Typography variant="h5">Double Diamonds</Typography>
                </Box>
                <Box className="" style={{ paddingBottom: "24px" }}>
                  <Typography variant="h3">0</Typography>
                </Box>
                <Button variant="contained" color="primary" className="connect-button">
                  Claim
                </Button>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
    // <div id="zap-view">
    //   <Zoom in={true}>
    //     <Paper className="ohm-card">
    //       <div className="staking-area">
    //         {!address ? (
    //           <div className="stake-wallet-notification">
    //             <div className="wallet-menu" id="wallet-menu">
    //               <Button variant="contained" color="primary" className="connect-button" onClick={connect} key={1}>
    //                 <Trans>Connect Wallet</Trans>
    //               </Button>
    //             </div>
    //             <Typography variant="h6">
    //               <Trans>Connect your wallet to use Zap</Trans>
    //             </Typography>
    //           </div>
    //         ) : (
    //           <>
    //             <Box className="stake-action-area">
    //               <Box alignSelf="center" minWidth="420px" width="80%"></Box>
    //               <ZapStakeAction />
    //             </Box>
    //           </>
    //         )}
    //       </div>
    //     </Paper>
    //   </Zoom>
    //   <Zoom in={true}>
    //     <ZapInfo tokens={inputTokenImages} address={address} />
    //   </Zoom>
    // </div>
  );
}

export default AirDrop;
