import React, { useEffect, useRef, useState } from "react";
import "../app/custom.css";
import Grid from "@mui/material/Grid2";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CancelIcon from "@mui/icons-material/Cancel";
import { DM_Serif_Text } from "next/font/google";

import { Noto_Sans } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Inter } from "next/font/google";

const dmserif = DM_Serif_Text({ weight: "400",subsets: ['latin'] });

const notoSense = Noto_Sans({ weight: "400",subsets: ['latin'] });

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectCategoryRef = useRef();

  const MediumScreen = useMediaQuery("(max-width: 768px)");
  const smallScreen = useMediaQuery("(max-width: 461px)");

  const handleChange = (index) => {
    setSelectedCategory(index);
  };

  useEffect(() => {
    console.log("test", selectCategoryRef.current);
  }, []);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Left Side */}
      <Grid
        item
        sx={{
          width: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1598519575657-5f8d16c3a20f?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </Grid>

      {/* Right Side */}
      <Grid
        item
        sx={{
          width: "40%",
          padding: "5px",
          position: "relative",
        }}
      >
        {/* Top Bar */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: "60%",
            width: "40%",
            backgroundColor: "#fff",
            boxShadow: "0 7px 11px -3px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
            padding: "1rem",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            sx={{ paddingRight: "50px" }}
          >
            <Grid item xs={6}>
              <Button
                sx={{
                  backgroundColor: "#ef233c",
                  color: "#f5ece0",
                  fontFamily: notoSense.style.fontFamily,
                  fontWeight: "700",
                }}
                size={MediumScreen || smallScreen ? "small" : "large"}
                variant="contained"
              >
                Need More Help
              </Button>
            </Grid>
            <Grid item xs={6}>
              <CancelIcon
                sx={{ color: "#ef233c", fontSize: "2rem", strokeWidth: 1.5 }}
                size="large"
              />
            </Grid>
          </Grid>
        </Box>

        {/* Middle Content */}
       
        <Box
          sx={{
            height: "calc(100vh - 300px)",
            userSelect: "none",
            marginTop: "100px",
            padding: "1.5rem",
            overflow:"auto"
          }}
        >
            <Typography
            variant="h1"
            component="h2"
            sx={{
              userSelect: "none",
              color: "black",
              fontSize: "1.3rem",
              lineHeight: "1.5rem",
              marginBottom: "10px",
              fontWeight: "300",
              // padding: ".5rem .5rem 0",
              fontFamily: "Klim-Semibold, Georgia, Times New Roman, serif",
            }}
          >
            Select Modal
          </Typography>

          <Box>
            <Typography
              sx={{ fontFamily: dmserif.style.fontFamily }}
              gutterBottom
              variant="h4"
              component="div"
            >
              Step 1
            </Typography>

            <Typography
              sx={{ fontFamily: dmserif.style.fontFamily, color: "gray" }}
              gutterBottom
              variant="small"
              component="div"
            >
              Follow steps for move forword and get your product.
            </Typography>

            <Typography
              sx={{
                fontFamily: dmserif.style.fontFamily,
                my: "20px",
                color: "gray",
              }}
              gutterBottom
              variant="h6"
              component="div"
            >
              Select Modal
            </Typography>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{ overflow: "auto", height: "250px", width: "100%",alignItems:"center",justifyContent:"center" }}
          >

           
            <Grid item xs={6}  key="1">
              <Card
                ref={selectCategoryRef}
                onClick={() => handleChange(1)}
                sx={{
                  width: "130px",
                  height: "130px",
                  marginTop: "5px",
                  marginLeft:"10px",
                  boxShadow:
                    selectedCategory === 1
                      ? "0 0 0 3px #ef233c"
                      : "0 0 0 2px #ededec",
                  // border: "3px solid #ef233c",
                  borderRadius: "10px",
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
                        fontFamily: dmserif.style.fontFamily,
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

            <Grid item xs={4}   key="2">
              <Card
                ref={selectCategoryRef}
                onClick={() => handleChange(2)}
                sx={{
                  width: "130px",
                  height: "130px",
                  marginLeft:"10px",
                  boxShadow:
                    selectedCategory === 2
                      ? "0 0 0 3px #ef233c"
                      : "0 0 0 2px #ededec",
                  // border: "2px solid rgb(235, 234, 234)",
                  borderRadius: "10px",
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
                        fontFamily: dmserif.style.fontFamily,
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

            <Grid item xs={4} key="3">
              <Card
                ref={selectCategoryRef}
                onClick={() => handleChange(3)}
                sx={{
                  width: "130px",
                  height: "130px",
                  marginLeft:"10px",
                  boxShadow:
                    selectedCategory === 3
                      ? "0 0 0 3px #ef233c"
                      : "0 0 0 2px #ededec",
                  borderRadius: "10px",
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
                        fontFamily: dmserif.style.fontFamily,
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

            <Grid item xs={4}  key="4">
              <Card
                ref={selectCategoryRef}
                onClick={() => handleChange(4)}
                sx={{
                  width: "130px",
                  height: "130px",
                  marginLeft:"10px",
                  marginBottom:"5px",
                  boxShadow:
                    selectedCategory === 4
                      ? "0 0 0 3px #ef233c"
                      : "0 0 0 2px #ededec",
                  // border: "2px solid rgb(235, 234, 234)",
                  borderRadius: "10px",
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
                        fontFamily: dmserif.style.fontFamily,
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

        {/* Bottom Bar */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: "60%",
            width: "40%",
            backgroundColor: "#fff",
            boxShadow: "0 -3px 11px -3px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
            padding: "1rem",
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            sx={{ paddingRight: "40px" }}
          >
            <Grid item xs={6}>
              <Button
                sx={{
                  backgroundColor: "#ef233c",
                  color: "#f5ece0",
                  fontFamily: notoSense.style.fontFamily,
                  fontWeight: "700",
                }}
                size={MediumScreen || smallScreen ? "small" : "large"}
                variant="contained"
                startIcon={<ArrowCircleLeftIcon />}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                sx={{
                  backgroundColor: "#ef233c",
                  color: "#f5ece0",
                  fontFamily: notoSense.style.fontFamily,
                  fontWeight: "700",
                }}
                size={MediumScreen || smallScreen ? "small" : "large"}
                variant="contained"
                endIcon={<ArrowCircleRightIcon />}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
