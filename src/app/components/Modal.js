import React, { useEffect, useRef, useState } from "react";
import "../../app/custom.css";
import Grid from "@mui/material/Grid";
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

const dmserif = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

const notoSense = Noto_Sans({ weight: "400", subsets: ["latin"] });

const Modal = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChangeSelect = (event) => {
        setSelectedOption(event.target.value);
      };
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
            Modal Selection
          </Typography>

         
        </Box>

        
        <Box>
         

          <FormControl fullWidth sx={{ marginTop: "10px" }}>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select"
              value={selectedOption}
              onChange={handleChangeSelect}
              size="small"
              sx={{
                padding: "6px 10px",
              }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Modal;
