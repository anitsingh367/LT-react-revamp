import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../assets/Logo.png";
import CustomizedMenus from "./CustomizedMenus.react";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import ContributeModal from "../Modal/ContributeModal.react";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [openArticle, setOpenArticle] = React.useState(false);
  const [openProject, setOpenProject] = React.useState(false);

  const handleClickArticle = () => {
    setOpenArticle(!openArticle);
  };
  const handleClickProject = () => {
    setOpenProject(!openProject);
  };

  const [openContributeModal, setOpenContributeModal] = useState(false);

  const handleContributeButton = () => {
    setOpenContributeModal(true);
  };

  const drawer = (
    <div>
      <ContributeModal
        isOpen={openContributeModal}
        onClose={(value) => setOpenContributeModal(value)}
        isNavbar={true}
      />
      <Toolbar sx={{ justifyContent: "center" }}>
        <img src={logo} alt="logo" width="50%" height="50%" />
      </Toolbar>
      <Divider></Divider>
      <List>
        <ListItemButton>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="About" />
        </ListItemButton>

        <ListItemButton onClick={handleClickArticle}>
          <ListItemText primary="Articles" />
          {openArticle ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openArticle} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="English Articls" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Punjabi Articls" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClickProject}>
          <ListItemText primary="Projects" />
          {openProject ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openProject} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Accomplished Projects" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Ongoing Projects" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Future Projects" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemText primary="Video Section" />
        </ListItemButton>
        <Button
          variant="outlined"
          sx={{ marginLeft: 2 }}
          onClick={handleContributeButton}
        >
          Contribute Now
        </Button>
      </List>
    </div>
  );

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <AppBar component="nav" position="relative">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { lg: "center", md: "flex-start" },
            aligncenter: "center",
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { lg: "flex", md: "none", sm: "none", xs: "none" },
            }}
          >
            <img src={logo} alt="logo" width="15%" height="15%"></img>
          </Box>
          <Box
            sx={{
              display: { lg: "flex", xs: "none", md: "none", sm: "none" },
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button variant="h6">Home</Button>
            <Button variant="h6">About</Button>
            <CustomizedMenus
              content={{
                title: "Articles",
                options: ["English Articles", "Punjabi Aricles"],
              }}
            />
            <CustomizedMenus
              content={{
                title: "Projects",
                options: [
                  "Accomplished Projects",
                  "Ongoing Projects",
                  "Future Projects",
                ],
              }}
            />
            <Button variant="h6">Video Section</Button>
            <Button variant="outlined" onClick={handleContributeButton}>
              Contribute Now
            </Button>
          </Box>
        </Toolbar>
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
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default DrawerAppBar;
