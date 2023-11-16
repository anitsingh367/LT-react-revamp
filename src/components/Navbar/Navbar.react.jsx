import * as React from "react";
import { useState } from "react";

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  // Collapse,
  Divider,
  Container,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import logo from "../../assets/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
// import CustomizedMenus from "./CustomizedMenus.react";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
import ContributeModal from "../ContributeModal/ContributeModal.react";
import VolunteerModal from "../VolunteerModal/VolunteerModal.react";

import useHashRouteToggle from "../../customHooks/useHashRouteToggle";

import { Link } from "react-router-dom";
import navLinks from "../../data/navLinks";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [openContributeModal, setOpenContributeModal] =
    useHashRouteToggle("contribute"); //useHasRouteToggle is used for controlling browser back button
  const [openVolunteerModal, setOpenVolunteerModal] =
    useHashRouteToggle("volunteer"); //useHasRouteToggle is used for controlling browser back button

  const handleContributeButton = () => {
    setOpenContributeModal(true);
  };
  const handleVolunteerButton = () => {
    setOpenVolunteerModal(true);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          transition: "all 0.5s ease-in-out",
          bgcolor: { xs: "white", md: trigger ? "white" : "transparent" },
        }}
        elevation={trigger ? 4 : 0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box
              display={{ xs: "none", md: "flex", lg: "flex" }}
              mr={1}
              width="5%">
              <img
                src={logo}
                alt="logo"
                width={"100%"}
                style={{ aspectRatio: "1/1" }}></img>
            </Box>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "flex", md: "none", lg: "none" } }}
              mr={1}>
              <MenuIcon />
            </IconButton>
            <Box display="flex" gap={1}>
              <Box display={{ xs: "none", md: "flex", lg: "flex" }} gap={1}>
                {navLinks.map((link) => (
                  <Link to={link.path} className="link">
                    <Button variant="text" color={"secondary"}>
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Button
                sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}
                variant="contained"
                onClick={handleVolunteerButton}>
                Become Volunteer
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleContributeButton}>
                Contribute Now
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "flex", md: "flex", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}>
        <ContributeModal
          isOpen={openContributeModal}
          onClose={(value) => setOpenContributeModal(value)}
          isNavbar={true}
        />
        <VolunteerModal
          isOpen={openVolunteerModal}
          onClose={(value) => setOpenVolunteerModal(value)}
          isNavbar={true}
        />
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box width="50%">
            <img
              src={logo}
              alt="logo"
              width="100%"
              style={{ aspectRatio: "1/1" }}
            />
          </Box>
        </Toolbar>
        <Divider></Divider>
        <List>
          {navLinks.map((link) => (
            <Link to={link.path} className="link" onClick={handleDrawerToggle}>
              <ListItemButton>
                <ListItemText primary={link.name} />
              </ListItemButton>
            </Link>
          ))}
          <ListItemButton>
            <Button variant="contained" onClick={handleVolunteerButton}>
              Become Volunteer
            </Button>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}

export default DrawerAppBar;
