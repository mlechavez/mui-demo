import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import NavigateNexticon from "@mui/icons-material/NavigateNext";

const MuiBreadcrumbs = () => {
  return (
    <Box aria-label="breadcrumb">
      <Container sx={{ paddingTop: 2, paddingBottom: 1 }}>
        <Breadcrumbs separator={<NavigateNexticon fontSize="small" />}>
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default MuiBreadcrumbs;
