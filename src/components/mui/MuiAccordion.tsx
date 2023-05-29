import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (expanded: boolean, panel: string) => {
    setExpanded(expanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, expanded) => handleChange(expanded, "panel1")}
      >
        <AccordionSummary
          id="panel1"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            voluptatibus nesciunt quia impedit vel at non minus magni quos
            praesentium?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, expanded) => handleChange(expanded, "panel2")}
      >
        <AccordionSummary
          id="panel2"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            voluptatibus nesciunt quia impedit vel at non minus magni quos
            praesentium?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, expanded) => handleChange(expanded, "panel3")}
      >
        <AccordionSummary
          id="panel3"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            voluptatibus nesciunt quia impedit vel at non minus magni quos
            praesentium?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MuiAccordion;
