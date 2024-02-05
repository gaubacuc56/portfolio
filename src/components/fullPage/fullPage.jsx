import React from "react";
import { Box } from "@mui/material";
import Home from "../Home/home";
import About from "../about/about";
import Services from "../services/services";
import Skills from "../skills/skills";
import Footer from "../footer/footer";
import Exed from "../exed/exed";
import Projects from "../projects";
const FullPage = () => {
  return (
    <Box>
      <Home />
      <About />
      <Services />
      <Exed />
      {<Projects />}
      <Skills />
      <Footer />
    </Box>
  );
};

export default FullPage;
