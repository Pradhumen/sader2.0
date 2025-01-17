import React, { useEffect, useRef, useState } from "react";
import "../app/custom.css";
import Grid from "@mui/material/Grid";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CancelIcon from "@mui/icons-material/Cancel";
import { DM_Serif_Text } from "next/font/google";
import { Noto_Sans } from "next/font/google";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
import Step2 from "@/app/components/Step2";
import Step3 from "@/app/components/Step3";
import Step4 from "@/app/components/Step4";
import Step5 from "@/app/components/Step5";
import Modal from "@/app/components/Modal";
import Step6 from "@/app/components/Step6";

const dmserif = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

const notoSense = Noto_Sans({ weight: "400", subsets: ["latin"] });

const Home = () => {
  const [step, setStep] = useState(0);
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

  const nextStep = () => {
     if(step < 6) setStep(step + 1);
  }

  const previousStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const renderStep = () => {
    switch(step){
      case 0:
        return <Step1/>
      case 1:
        return <Modal/>
      case 2:
        return <Step2/>
      case 3:
          return <Step3/>
      case 4:
          return <Step6/>
      case 5:
            return <Step4/>
      case 6:
          return <Step5/>
      default:
      return <Typography variant="h5">Step 3</Typography>;
    }
    
  }

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
            // backgroundImage: `url('https://images.unsplash.com/photo-1598519575657-5f8d16c3a20f?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: 1,
            margin: 0,
          }}
        >
           <Carousel>
              <div>
                <img src="https://images.unsplash.com/photo-1542799706-c8bc889c7ffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>

              <div>
                <img src="https://plus.unsplash.com/premium_photo-1679060384160-0ac5ff75a9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>

              <div>
                <img src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </Carousel>

        </Grid>

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

            {renderStep()}



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
                   {step > 0 && (
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
                    onClick={previousStep}
                    size="large"
                    variant="contained"
                    startIcon={<ArrowCircleLeftIcon />}
                  >

                    Back
                  </Button>
                  )}
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
                  {step < 6 && (

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
                    onClick={nextStep}
                    size="large"
                    variant="contained"
                    endIcon={<ArrowCircleRightIcon />}
                  >
                    Continue
                  </Button>

)}
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
