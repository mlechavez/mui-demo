import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  ListItemButton,
  Avatar,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiList = () => {
  return (
    <Box>
      <Container sx={{ paddingTop: 2, paddingBottom: 1 }}>
        <Box sx={{ width: "400px" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar>
                      <MailIcon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText
                  primary="List item 1"
                  secondary="Secondary text"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar>
                      <MailIcon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText
                  primary="List item 2"
                  secondary="Secondary text"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar>
                      <MailIcon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText
                  primary="List item 3"
                  secondary="Secondary text"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default MuiList;
