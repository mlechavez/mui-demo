import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Link,
  Menu,
  MenuItem,
  useTheme,
  Tooltip,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState, MouseEvent } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import avanadeLogo from "../../public/images/avanade-hd-logo.png";
import Image from "next/image";
import { useColorMode } from "../theme";

const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const { toggle } = useColorMode();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorModeToggle = () => {
    toggle();
  };

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <Image
            src={avanadeLogo}
            alt="Avanade logo"
            height={50}
            width={150}
            style={{ objectFit: "contain" }}
          />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={NextLink} href="/features">
            Features
          </Button>
          <Button color="inherit" component={NextLink} href="/pricing">
            Pricing
          </Button>
          <Button color="inherit" component={NextLink} href="/about">
            About
          </Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resources
          </Button>
          <Menu
            id="resources-menu"
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            MenuListProps={{
              "aria-labelledby": "resources-button",
            }}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>PodCast</MenuItem>
          </Menu>
          <Button color="inherit" component={NextLink} href="/login">
            Login
          </Button>
        </Stack>
        <Stack direction="row">
          <IconButton>
            <Tooltip
              title={theme.palette.mode === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme.palette.mode === "dark" ? (
                <LightModeIcon onClick={handleColorModeToggle} />
              ) : (
                <DarkModeIcon onClick={handleColorModeToggle} />
              )}
            </Tooltip>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
