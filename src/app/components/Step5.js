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

const Step5 = () => {
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
            Cart Details
          </Typography>
        </Box>

       

        
      </Box>
    </>
  );
};

export default Step5;
