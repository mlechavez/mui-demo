import { Container, Skeleton, Stack } from "@mui/material";

const MuiSkeleton = () => {
  return (
    <Container>
      <Stack spacing={1} width="250px" pt={2} pb={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={250} height={125} />
      </Stack>
    </Container>
  );
};

export default MuiSkeleton;
