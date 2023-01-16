import React from "react";
import { Link } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

function Navbar() {
  const routeLink = {
    color: "black",
    backgroundColor: " #0099cc",
    padding: "10px",
    borderRadius: "8px",
    marginLeft: "12px",
    textDecoration: "none",
  };
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PROJECT APP
            </Typography>

            <Link to="/" style={routeLink}>
              Add Project
            </Link>

            <Link to="/ProjectDetails" style={routeLink}>
              Project Details
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
