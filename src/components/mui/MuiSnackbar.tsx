import { Alert, AlertProps, Button, Container, Snackbar } from "@mui/material";
import React, { SyntheticEvent, forwardRef, useState } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert ref={ref} {...props} />;
  }
);

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    setOpen(false);
    console.log(reason);
  };

  return (
    <Container sx={{ paddingTop: 2, paddingBottom: 1 }}>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose}>
          Form submitted successfully
        </SnackbarAlert>
      </Snackbar>
      {/* <Snackbar
        message="Form submitted successfully!"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}
    </Container>
  );
};

export default MuiSnackbar;
