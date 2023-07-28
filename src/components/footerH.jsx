import React from "react";
import { Box, Typography } from "@mui/material";
// import { blue } from "@mui/material/colors";

const FooterG = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", p: 5 }}>
        <button
          style={{
            background: "#fff",
            color: "#002c9b",
            border: "solid 2px #002c9b",
            marginTop: "20px",
            boxSizing: "border-box",
            borderRadius: "24.8px",
            cursor: "pointer",
            height: "50px",
            width: "260px",
            textDecoration: "none",
            fontSize: "16px",
            textTransform: "uppercase",
            letterSpacing: "2.5px"
          }}
        >
          browse our menus
        </button>
      </Box>
    </>
  );
};

export default FooterG;
