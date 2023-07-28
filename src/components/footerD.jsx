import React from "react";
import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const FooterD = () => {
  return (
    <>
      <Box sx={{textAlign: "center" , p: 5}}>
        <Typography variant="h4" sx={{color: "#002684",textTransform: "uppercase", fontWeight: 600,letterSpacing: "5.4px", "@media (max-width:600px)":{fontSize: "1.5rem"}}}>choose from</Typography>
        <Typography variant="h3" sx={{color: "#00a0df",fontFamily: "Chronicle Deck", "@media (max-width:600px)":{fontSize: "1rem"}}}>70+ weekly options</Typography>
      </Box>
    </>
  );
};

export default FooterD;