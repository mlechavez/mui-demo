import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAccordion from "./MuiAccordion";
import { useState } from "react";

const MuiDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <MuiAccordion />
      </Drawer>
    </>
  );
};

export default MuiDrawer;
