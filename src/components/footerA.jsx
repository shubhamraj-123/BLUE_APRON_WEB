import React from "react";
import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const FooterA = () => {
  return (
    <>
      <Box sx={{textAlign: "center" , p: 7}}>
        <Typography variant="h4" sx={{color: "#002684", fontWeight: 600, "@media (max-width:600px)":{fontSize: "1.5rem"}}}>465+ million meals shipped</Typography>
        <Typography variant="h6" sx={{color: "black", "@media (max-width:600px)":{fontSize: "1rem"}}}>See why home cooks stick with the <br></br>original Indian meal kit.</Typography>
      </Box>
    </>
  );
};

export default FooterA;