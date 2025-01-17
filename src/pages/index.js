import React, { useEffect, useRef, useState } from "react";
import "../app/custom.css";
import Grid from "@mui/material/Grid";

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
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Inter } from "next/font/google";
import Step1 from "@/app/components/Step1";

const dmserif = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

const notoSense = Noto_Sans({ weight: "400", subsets: ["latin"] });

const Home = () => {
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
      <Grid
        container
        sx={{ height: "100vh", width: "100vw", padding: 0, margin: 0 }}
      >
        {/* Image Container */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            height: isSmallScreen ? "400px" : "100vh",
            backgroundImage: `url('https://images.unsplash.com/photo-1598519575657-5f8d16c3a20f?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: 0,
            margin: 0,
          }}
        />

        {/* Input Container */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            {/* Top Bar */}
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                boxShadow: "0 7px 11px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Grid
                container
                spacing={2} // Adds space between child Grid items
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  padding: "2px",
                  paddingBottom: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "start",
                  }} // Center-align content
                >
                  <Button
                    sx={{
                      backgroundColor: "#ef233c",
                      color: "#f5ece0",
                      fontFamily: notoSense.style.fontFamily,
                      fontWeight: "700",
                      padding: "8px 16px",
                    }}
                    size={MediumScreen || smallScreen ? "small" : "large"}
                    variant="contained"
                  >
                    Need More Help
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "end",
                  }} // Right-align CancelIcon
                >
                  <CancelIcon
                    sx={{
                      color: "#ef233c",
                      fontSize: "2rem",
                      strokeWidth: 1.5,
                      marginRight: "10px",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>

           {/* Step 1 */}
           <Step1/>


            {/* Bottom Bar */}
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                // boxShadow: "0 -3px 11px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Grid
                container
                spacing={2} // Adds space between child Grid items
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  paddingBottom: "10px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "start",
                  }} // Center-align content
                >
                  <Button
                    sx={{
                      display: "flex",
                      backgroundColor: "#ef233c",
                      color: "#f5ece0",
                      fontFamily: notoSense.style.fontFamily,
                      fontWeight: "700",
                      justifyContent: "flex-start",
                      alignItems: "start",
                    }}
                    size="large"
                    variant="contained"
                    startIcon={<ArrowCircleLeftIcon />}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "end",
                  }} // Right-align CancelIcon
                >
                  <Button
                    sx={{
                      display: "flex",
                      backgroundColor: "#ef233c",
                      color: "#f5ece0",
                      fontFamily: notoSense.style.fontFamily,
                      fontWeight: "700",
                      justifyContent: "flex-end",
                      alignItems: "end",
                    }}
                    size="large"
                    variant="contained"
                    endIcon={<ArrowCircleRightIcon />}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
