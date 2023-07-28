import React from "react";
import { Box, Typography } from "@mui/material";
// import { blue } from "@mui/material/colors";

const FooterC = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", p: 7 }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            "@media (max-width:600px)": { fontSize: "1.5rem" },
          }}
        >
          Get started for as little as $7.99 per serving
        </Typography>
        <button
          style={{
            background: "darkblue",
            color: "white",
            marginTop: "20px",
            border: "none",
            borderRadius: "120px",
            cursor: "pointer",
            height: "50px",
            width: "180px",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          SEE PLANS
        </button>
      </Box>
    </>
  );
};

export default FooterC;
