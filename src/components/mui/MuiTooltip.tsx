import { Tooltip, IconButton, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiTooltip = () => {
  return (
    <Container sx={{ paddingTop: 2, paddingBottom: 1 }}>
      <Tooltip title="Delete" placement="right" arrow>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Container>
  );
};

export default MuiTooltip;
