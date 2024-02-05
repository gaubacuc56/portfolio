import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Nav from "../nav/nav";
import PersonalImage from "../../assets/images/profile.jpg";
import CustomButton from "../../utils/customButton";
import { motion } from "framer-motion";
const myVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      delay: 1.5,
    },
  },
};

const nameVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      delay: 2,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      delay: 2.5,
    },
  },
};
const buttonVariants = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      delay: 3,
    },
  },
};

const imageVariants = {
  hidden: {
    x: 700,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      delay: 3,
    },
  },
};
const Home = () => {
  return (
    <Box id="home" className="home container">
      <Nav />
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          gap: "10rem",
          paddingLeft: { xs: "0rem", md: "8rem" },
          overflow: "hidden",
          height: "calc(100vh - 81px)",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: { xs: "center", md: "initial" },
            textAlign: { xs: "center", md: "initial" },
          }}
        >
          <Stack className="text red-text">
            <Typography
              component={motion.p}
              variants={myVariants}
              initial="hidden"
              animate="visible"
              variant="body1"
              color="white"
            >
              Hi there, my name is
            </Typography>
            <Typography
              component={motion.h1}
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              variant="h1"
              sx={{ fontSize: "4rem", fontWeight: "700" }}
            >
              Nguyễn Thái Toàn
            </Typography>
            <Typography
              component={motion.p}
              variant="body1"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              mt={1}
            >
              I am a frontend web developer
            </Typography>
          </Stack>
          <motion.a
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            href="https://www.linkedin.com/in/toan-nt/"
            target="blank"
          >
            <CustomButton
              beforeWidth={"0%"}
              beforeBgColorHover="var(--red-text)"
              hoverColor="black"
              textColor="var(--white-text)"
              content="Get in touch"
            />
          </motion.a>
        </Stack>

        <Box
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          width={{ md: "400", lg: "600px" }}
          height="500px"
          borderRadius="50px"
          bgcolor="#f5a901"
          sx={{ rotate: "-20deg" }}
          position="relative"
          display={{ xs: "none", md: "block" }}
        >
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: "absolute",
              top: "-20px",
              left: "50px",
              width: "80%",
              borderRadius: "50px",
              rotate: "20deg",
            }}
            src={PersonalImage}
            alt="Nguyễn Thái Toàn"
          />
        </Box>
        {/*  <Box
          className="personalImage"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            style={{
              filter: "drop-shadow(2px 4px 12px rgba(0,0,0,0.50))",
              width: "120%",
            }}
            src={PersonalImage}
            alt="Nguyễn Thái Toàn"
          />
        </Box> */}
      </Stack>
    </Box>
  );
};

export default Home;
