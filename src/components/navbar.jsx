import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import blueapron from "../images/blueapron.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"blue"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        {/* <FastfoodIcon /> */}
        <img src={blueapron} alt="logo" height={"40"} width={"auto"} />
        {/* Blue Apron */}
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}>ON THE MENU</Link>
        </li>
        <li>
          <Link to={"/"}>PLANS</Link>
        </li>
        <li>
          <Link to={"/"}>WINE</Link>
        </li>
        <li>
          <Link to={"/"}>GIFTS</Link>
        </li>
        <li>
          <Link to={"/"}>MARKET</Link>
        </li>
        <li>
          <Link to={"/"}>LOG IN</Link>
        </li>
        <li>
          <button>
            <Link to={"/"}>SIGN UP</Link>
          </button>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "whitesmoke" }}>
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 5, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"blue"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 2 }}
            >
              {/* <FastfoodIcon /> */}
              <img src={blueapron} alt="logo" height={"40"} width={"auto"} />
              {/* Blue Apron */}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>ON THE MENU</Link>
                </li>
                <li>
                  <Link to={"/"}>PLANS</Link>
                </li>
                <li>
                  <Link to={"/"}>WINE</Link>
                </li>
                <li>
                  <Link to={"/"}>GIFTS</Link>
                </li>
                <li>
                  <Link to={"/"}>MARKET</Link>
                </li>
                <li>
                  <Link to={"/"}>LOG IN</Link>
                </li>
                <li>
                  <button>
                    <Link to={"/"}>SIGN UP</Link>
                  </button>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
