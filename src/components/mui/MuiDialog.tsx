import {
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

const MuiDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container sx={{ pt: 2, pb: 1 }}>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit he test? you will not be able to
            edit after submitting{" "}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button autoFocus>Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default MuiDialog;
