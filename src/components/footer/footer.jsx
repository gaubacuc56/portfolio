import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {BsLinkedin, BsFacebook, BsTiktok } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <Box component="footer" className="footer" textAlign="center">
      <Typography fontSize={20} fontWeight={600} color="white" pb={0}>
        Find me on
      </Typography>
      <Stack
        justifyContent="center"
        alignItems="center"
        padding="1rem 0 0.5rem"
        gap="1rem"
      >
        <Stack direction="row" alignItems="center" gap="1rem">
          <a
            href="https://www.linkedin.com/in/toan-nt/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin fontSize={26} color="#aed6dc" />
          </a>
          <a
            href="https://www.facebook.com/gaubacuc56/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook fontSize={26} color="#aed6dc" />
          </a>
          <a
            href="https://www.instagram.com/thaitoannnn/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram fontSize={35} color="#aed6dc" />
          </a>
          <a
            href="https://www.tiktok.com/@hitoantoan?_t=8gRc4gcPYsU&_r=1"
            target="_blank"
            rel="noreferrer"
          >
            <BsTiktok fontSize={26} color="#aed6dc" />
          </a>
        </Stack>
      </Stack>
      <Typography variant="overline" color="var(--white-text)">
        © Copyright {year} - Nguyễn Thái Toàn
      </Typography>
    </Box>
  );
};

export default Footer;
