import React, { useEffect, useRef, useState } from "react";
import "../../app/custom.css";
import Grid from "@mui/material/Grid";
import { DM_Serif_Text } from "next/font/google";

import { Noto_Sans } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";

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

const Step2 = () => {
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
            Size
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
          Measurement
        </Typography>

        <Box>
          <InputLabel
            sx={{
              fontWeight: "800",
              fontSize: "x-small",
              marginBottom: "10px",
              fontFamily: notoSense.style.fontFamily,
            }}
          >
            Product Width (Min 100 cm - Max 500 cm)
          </InputLabel>
          <TextField
            fullWidth
            sx={{ marginTop: "10px",
                '& .MuiOutlinedInput-root': {
                    borderRadius: '.5rem', 
                    boxShadow:"1px solid gray"
                },
             }}
            label="Enter Width"
            size="small"
          />
        </Box>
        <Box>
          <InputLabel
            sx={{
              fontWeight: "800",
              fontSize: "x-small",
              marginTop: "20px",
              marginBottom: "10px",
              fontFamily: notoSense.style.fontFamily,
            }}
          >
            Product Height (Min 200 cm - Max 375 cm)
          </InputLabel>
          <TextField
            fullWidth
            sx={{ marginTop: "10px",
                '& .MuiOutlinedInput-root': {
                    borderColor:"gray",
                    borderRadius: '.5rem', 
                    boxShadow:"1px solid gray"
                },
                
             }}
            label="Enter Height"
            size="small"
          />
        </Box>
        <Box>
          <Typography
            variant="button"
            gutterBottom
            sx={{
              display: "block",
              fontFamily: notoSense.style.fontFamily,
              fontWeight: "700",
              marginTop: "20px",
            }}
          >
            Quantity
          </Typography>

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

export default Step2;
