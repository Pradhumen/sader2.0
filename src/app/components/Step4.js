import React, { useEffect, useRef, useState } from "react";
import "../../app/custom.css";
import { DM_Serif_Text } from "next/font/google";

import { Noto_Sans } from "next/font/google";


import {
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import Grid from "@mui/material/Grid2";

const dmserif = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

const notoSense = Noto_Sans({ weight: "400", subsets: ["latin"] });

const Step4 = () => {
  return (
    <>
      {/* Middle Content */}

      <Box
        sx={{
          height: "calc(100vh - 205px)",
          userSelect: "none",
          padding: "1.5rem",
          overflow: "auto",
        }}
      >
        <Box>
          <Typography
            sx={{ fontFamily: dmserif.style.fontFamily }}
            gutterBottom
            variant="h4"
            component="div"
          >
            Summery
          </Typography>
        </Box>

        <Typography
          variant="button"
          gutterBottom
          sx={{
            display: "block",
            fontFamily: notoSense.style.fontFamily,
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Pinch Pleat Curtain
        </Typography>

        <Grid container justifyContent="space-between" sx={{fontFamily: notoSense.style.fontFamily}}>
          <Grid item sx={{ mt: 2, fontSize: "small", fontWeight: "700" }}>
            <Grid xs={6}>Quantity</Grid>
          </Grid>

          <Grid item sx={{ mt: 2, fontSize: "small", textWrap: "nowrap" }}>
            <Grid xs={6}>1 Qty</Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="space-between">
          <Grid item sx={{ mt: 2, fontSize: "small", fontWeight: "700" }}>
            <Grid xs={6}>Lining Option</Grid>
          </Grid>
          <Grid item sx={{ mt: 2, fontSize: "small", textWrap: "nowrap" }}>
            <Grid xs={6}>No Lining</Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="space-between">
          <Grid item sx={{ mt: 2, fontSize: "small", fontWeight: "700" }}>
            <Grid xs={6}>Track Option</Grid>
          </Grid>
          <Grid item sx={{ mt: 2, fontSize: "small", textWrap: "nowrap" }}>
            <Grid xs={6}>No Track (Fabric Only)</Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Step4;
