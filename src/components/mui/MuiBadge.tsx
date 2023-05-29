import { Badge, Box, Container, Stack } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
const MuiBadge = () => {
  return (
    <>
      <Box>
        <Container sx={{ paddingTop: 2, paddingBottom: 1 }}>
          <Stack spacing={2} direction="row">
            <Badge badgeContent={5} color="primary">
              <MailIcon />
            </Badge>
            <Badge badgeContent={5} color="secondary">
              <MailIcon />
            </Badge>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default MuiBadge;
