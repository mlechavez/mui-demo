import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PeopleIcon from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import DnsIcon from "@mui/icons-material/Dns";
import PublicIcon from "@mui/icons-material/Public";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useState } from "react";
const data = [
  { id: 1, icon: <DashboardIcon />, label: "Dashboard" },
  {
    id: 2,
    icon: <DnsIcon />,
    label: "Database",
    children: [
      { icon: <DnsIcon />, label: "No SQL" },
      { icon: <PublicIcon />, label: "Relational DB" },
    ],
  },
  {
    id: 3,
    icon: <PublicIcon />,
    label: "Another",
    children: [
      { icon: <DnsIcon />, label: "No SQL" },
      { icon: <PublicIcon />, label: "Relational DB" },
    ],
  },
  { id: 4, icon: <PermMedia />, label: "Storage" },
  { id: 5, icon: <PublicIcon />, label: "Hosting" },
];

const MuiCustomList = () => {
  const [expanded, setExpanded] = useState("");

  const handleExpanded = (expanded: string) => {
    setExpanded((prev) => (prev === expanded ? "" : expanded));
  };

  return (
    <Box>
      <Container>
        <List sx={{ width: "400px" }}>
          {data.map((item, index) => {
            if (!item.children?.length) {
              return (
                <ListItem disablePadding key={index}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              );
            } else {
              return (
                <Box key={index}>
                  <ListItem disablePadding>
                    <ListItemButton
                      disableRipple
                      onClick={() =>
                        handleExpanded("list" + item.id.toString())
                      }
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.label} />
                      <KeyboardArrowDownIcon
                        sx={{
                          transform:
                            expanded === "list" + item.id.toString()
                              ? "rotate(-180deg)"
                              : "rotate(0)",
                          transition: "0.2s",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  {expanded === "list" + item.id.toString() &&
                    item.children?.map((child, index) => (
                      <ListItem
                        disablePadding
                        key={index}
                        sx={{ paddingLeft: 2 }}
                      >
                        <ListItemButton>
                          <ListItemIcon sx={{ color: "inherit" }}>
                            {child.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={child.label}
                            primaryTypographyProps={{
                              fontSize: 14,
                              fontWeight: "medium",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                </Box>
              );
            }
          })}
          {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem> */}
          {/* <Box>
            <ListItem disablePadding>
              <ListItemButton
                disableRipple
                onClick={() => handleExpanded("list1")}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ListItemText primary="Build" />
                <KeyboardArrowDownIcon
                  sx={{
                    mr: -1,
                    transform:
                      expanded === "list1" ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
            </ListItem>
            {expanded === "list1" && (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "inherit" }}>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="authentication" />
                </ListItemButton>
              </ListItem>
            )}
          </Box> */}
          {/* <Box>
            <ListItem disablePadding>
              <ListItemButton
                disableRipple
                onClick={() => handleExpanded("list2")}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ListItemText primary="Test" />
                <KeyboardArrowDownIcon
                  sx={{
                    mr: -1,

                    transform:
                      expanded === "list2" ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
            </ListItem>
            {expanded === "list2" && (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "inherit" }}>
                    <PermMedia />
                  </ListItemIcon>
                  <ListItemText
                    primary="Testing"
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )}
          </Box> */}
        </List>
      </Container>
    </Box>
  );
};

export default MuiCustomList;

// data.map((item) => (
//   <ListItemButton key={item.label} sx={{ py: 0, minHeight: 32 }}>
//     <ListItemIcon sx={{ color: "inherit" }}>
//       {item.icon}
//     </ListItemIcon>
//     <ListItemText
//       primary={item.label}
//       primaryTypographyProps={{
//         fontSize: 14,
//         fontWeight: "medium",
//       }}
//     />
//   </ListItemButton>
// ))}
