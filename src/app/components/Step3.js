import React, { useEffect, useRef, useState } from "react";
import "../../app/custom.css";
import Grid from "@mui/material/Grid";
import { DM_Serif_Text } from "next/font/google";

import { Noto_Sans } from "next/font/google";

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
    Typography,
    useMediaQuery,
  } from "@mui/material";
  

const dmserif = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

const notoSense = Noto_Sans({ weight: "400", subsets: ["latin"] });

const Step3 = () => {
     const [selectedCategory, setSelectedCategory] = useState(null);
     const selectCategoryRef = useRef();

     const handleChange = (index) => {
        console.log('sss',index);
        setSelectedCategory(index);
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
            Search Item
          </Typography>
        </Box>

        <TextField
          sx={{ marginTop: "10px" }}
          id="item-code"
          label="item-code"
          variant="standard"
        />
        <Button
          sx={{
            padding: "8px",
            width: "85px",
            marginTop: "18px",
            borderRadius: "1px",
            minWidth: "50px",
            background: "#ef233c",
            color: "white",
            fontFamily: notoSense.style.fontFamily,
            fontWeight: 800,
            border: "none",
          }}
          variant="outlined"
        >
          Search
        </Button>

        <Typography
          sx={{ fontFamily: dmserif.style.fontFamily,marginTop:"20px" }}
          gutterBottom
          variant="h6"
          component="div"
        >
          Material Selection
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            overflow: "auto",
            padding: "5px",
            width: "100%",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Grid item key="1">
            <Card
              ref={selectCategoryRef}
              onClick={() => handleChange(1)}
              sx={{
                width: "130px",
                height: "130px",
                marginTop: "5px",
                marginLeft: "2px",
                boxShadow:
                  selectedCategory === 1
                    ? "0 0 0 3px #ef233c"
                    : "0 0 0 2px #ededec",
                // border: "3px solid #ef233c",
                borderRadius: "10px",
                "&:hover": {
                  boxShadow:
                    selectedCategory === 1
                      ? "0 0 0 3px #ef233c"
                      : "0 0 0 2px #56504b",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <img
                    height={50}
                    weight={50}
                    src="https://api.sedarglobal.com/uploads/100001/category/icon/1641116936_64c0558addc8a954907b.png"
                    alt=""
                  />
                </Box>

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: notoSense.style.fontFamily,
                      fontWeight: 500,
                      color: "#686058",
                      textAlign: "center",
                      fontSize: "small",
                      textWrap: "nowrap",
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    Color 1
                  </Typography>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>

          <Grid item key="2">
            <Card
              ref={selectCategoryRef}
              onClick={() => handleChange(2)}
              sx={{
                width: "130px",
                height: "130px",
                marginTop: "5px",
                marginLeft: "2px",
                boxShadow:
                  selectedCategory === 2
                    ? "0 0 0 3px #ef233c"
                    : "0 0 0 2px #ededec",
                // border: "2px solid rgb(235, 234, 234)",
                borderRadius: "10px",
                "&:hover": {
                  boxShadow:
                    selectedCategory === 2
                      ? "0 0 0 3px #ef233c"
                      : "0 0 0 2px #56504b",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <img
                    height={50}
                    weight={50}
                    src="https://api.sedarglobal.com/uploads/100001/category/icon/1641116936_64c0558addc8a954907b.png"
                    alt=""
                  />
                </Box>

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: notoSense.style.fontFamily,
                      fontWeight: 500,
                      color: "#686058",
                      textAlign: "center",
                      fontSize: "small",
                      textWrap: "nowrap",
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    Color 2
                  </Typography>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>

          <Grid item key="3">
            <Card
              ref={selectCategoryRef}
              onClick={() => handleChange(3)}
              sx={{
                width: "130px",
                height: "130px",
                marginTop: "5px",
                marginLeft: "2px",
                boxShadow:
                  selectedCategory === 3
                    ? "0 0 0 3px #ef233c"
                    : "0 0 0 2px #ededec",
                borderRadius: "10px",
                "&:hover": {
                  boxShadow:
                    selectedCategory === 3
                      ? "0 0 0 3px #ef233c"
                      : "0 0 0 2px #56504b",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <img
                    height={50}
                    weight={50}
                    src="https://api.sedarglobal.com/uploads/100001/category/icon/1641116936_64c0558addc8a954907b.png"
                    alt=""
                  />
                </Box>

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: notoSense.style.fontFamily,
                      fontWeight: 500,
                      color: "#686058",
                      textAlign: "center",
                      fontSize: "small",
                      textWrap: "nowrap",
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    Color 3
                  </Typography>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>

          <Grid item key="4">
            <Card
              ref={selectCategoryRef}
              onClick={() => handleChange(4)}
              sx={{
                width: "130px",
                height: "130px",

                marginLeft: "2px",
                boxShadow:
                  selectedCategory === 4
                    ? "0 0 0 3px #ef233c"
                    : "0 0 0 2px #ededec",
                // border: "2px solid rgb(235, 234, 234)",
                borderRadius: "10px",
                "&:hover": {
                  boxShadow:
                    selectedCategory === 4
                      ? "0 0 0 3px #ef233c"
                      : "0 0 0 2px #56504b",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <img
                    height={50}
                    weight={50}
                    src="https://api.sedarglobal.com/uploads/100001/category/icon/1641116936_64c0558addc8a954907b.png"
                    alt=""
                  />
                </Box>

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: notoSense.style.fontFamily,
                      fontWeight: 500,
                      color: "#686058",
                      textAlign: "center",
                      fontSize: "small",
                      textWrap: "nowrap",
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    Color 4
                  </Typography>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Box>
    </>
  );
};

export default Step3;
