import React, { useEffect, useRef, useState } from "react";
import "../../app/custom.css";
import Grid from "@mui/material/Grid";
import { DM_Serif_Text } from "next/font/google";

import { Noto_Sans } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";

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

const Step1 = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectCategoryRef = useRef();

  const MediumScreen = useMediaQuery("(max-width: 768px)");
  const smallScreen = useMediaQuery("(max-width: 461px)");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleChange = (index) => {
    console.log('sss',index);
    setSelectedCategory(index);
  };

  useEffect(() => {
    console.log("test", selectCategoryRef.current);
  }, []);

  console.log(MediumScreen, "MediumScreen");

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
            Select Category
          </Typography>

          <Typography
            sx={{ fontFamily: dmserif.style.fontFamily, color: "gray" }}
            gutterBottom
            variant="small"
            component="div"
          >
            Follow steps for move forword and get your product.
          </Typography>

        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            overflow: "auto",
            padding: "5px",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
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
                    Curtains & Drapes
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
                    Blinds Shades
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
                    Wallpaper
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
                    Blinds Shades
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

export default Step1;
