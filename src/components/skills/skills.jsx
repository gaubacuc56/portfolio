import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Heading from "../../utils/heading";
import { skills } from "../../data/skillsData";
import { motion } from "framer-motion";
const Skills = () => {
  const [isHover, setIsHover] = useState("");

  return (
    <Box className="skills container">
      <Heading id="skills" headerText="Skills" />
      <Stack
        sx={{ flexDirection: { sm: "column", lg: "row" }, flexWrap: "wrap" }}
        gap="5rem"
        justifyContent="space-between"
      >
        {skills.map((item) => (
          <Box
            id={item.name}
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            onMouseEnter={() => setIsHover(item.name)}
            onMouseLeave={() => setIsHover("")}
            sx={{
              transform: `${isHover === item.name ? "scale(1.5)" : "scale(1)"}`,
              transition: 'all linear 0.2s',
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                transform: "scale(2)",
              }}
            >
              {item.icon}
            </Box>
            <Typography
              fontSize={20}
              fontWeight="700"
              color="var(--white-text)"
              mt={2}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Skills;
