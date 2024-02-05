import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "styled-components";
import { motion } from "framer-motion";

const Sytledlinks = styled.ul`
  display: flex;
  gap: 3.2rem;
  align-items: center;
  @media (max-width: 1280px) {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: var(--person-icon);
    transform: ${(props) =>
      props.clicked ? "translateX(0)" : "translateX(-100%)"};
    transition: all 0.3s linear;
  }
`;

const SytledlinksItems = styled.a`
  color: var(--primary-yellow);
  transition: all 0.2s linear;
  font-size: 1.3rem;
  &:hover {
    color: var(--white-text);
  }
`;

const MenuContainer = styled.div`
  display: none;
  @media (max-width: 1280px) {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 30px;
    cursor: pointer;
  }
`;

const Menu = styled.span`
  display: block;
  width: 100%;
  height: 3.5px;
  border-radius: 5px;
  background-color: var(--primary-yellow);
  transition: all 0.3s linear;
`;

const navVariants = {
  hidden: {
    transform: "translateY(-100%)",
  },
  visible: {
    transform: "translateY(0%)",
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const handleMenuClick = () => {
    setClicked(!clicked);
  };
  const handleLinkClick = () => {
    setClicked(false);
  };

  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [clicked]);
  return (
    <Box
      component={motion.nav}
      variants={navVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="navContainer"
      sx={{
        position: "relative",
        zIndex: 1,
      }}
    >
      <Stack
        direction="row"
        height="120px"
        sx={{
          justifyContent: { xs: "flex-start", lg: "center" },
          padding: { xs: "1rem 2rem", md: "1rem 5rem" },
          alignItems: "center",
        }}
      >
        <MenuContainer onClick={handleMenuClick}>
          <Menu
            style={{
              transform: clicked
                ? "rotate(45deg) translateX(6.5px)"
                : "rotate(0deg) translateX(0px)",
            }}
          ></Menu>
          <Menu
            style={{
              transform: clicked
                ? "rotate(-43deg) translateX(6px)"
                : "rotate(0deg) translateX(0px)",
            }}
          ></Menu>
          <Menu
            style={{
              transform: clicked ? "scale(0)" : "scale(1)",
              transformOrigin: "right",
            }}
          ></Menu>
        </MenuContainer>

        <Sytledlinks clicked={clicked}>
          <li>
            <SytledlinksItems href="#about" onClick={handleLinkClick}>
              About me
            </SytledlinksItems>
          </li>
          <li>
            <SytledlinksItems href="#services" onClick={handleLinkClick}>
              Services
            </SytledlinksItems>
          </li>
          <li>
            <SytledlinksItems href="#projects" onClick={handleLinkClick}>
              Projects
            </SytledlinksItems>
          </li>
          <li>
            <SytledlinksItems href="#skills" onClick={handleLinkClick}>
              Skills
            </SytledlinksItems>
          </li>
          <li>
            <SytledlinksItems href="#contact" onClick={handleLinkClick}>
              Contact
            </SytledlinksItems>
          </li>
        </Sytledlinks>
      </Stack>
    </Box>
  );
};

export default Nav;
