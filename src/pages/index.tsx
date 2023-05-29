import { Box } from "@mui/material";
import type { NextPage } from "next";
import MuiNavbar from "../components/MuiNavbar";
import MuiBreadcrumbs from "../components/MuiBreadcrumbs";
import MuiBadge from "../components/MuiBadge";
import MuiList from "../components/MuiList";
import MuiCustomList from "../components/MuiCustomList";
import MuiTooltip from "../components/MuiTooltip";
import MuiSnackbar from "../components/MuiSnackbar";
import MuiDialog from "../components/MuiDialog";
import MuiSkeleton from "../components/MuiSkeleton";

const Home: NextPage = () => {
  return (
    <>
      <MuiNavbar />
      <Box component="main">
        <MuiBreadcrumbs />
        <MuiBadge />
        <MuiList />
        <MuiCustomList />
        <MuiTooltip />
        <MuiSnackbar />
        <MuiDialog />
        <MuiSkeleton />
      </Box>
    </>
  );
};

export default Home;
