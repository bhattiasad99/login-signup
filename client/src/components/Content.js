import PropTypes from "prop-types";
import React from "react";
import { Box, Typography } from "@mui/material";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Content = ({ choice }) => {
  return (
    <Box sx={{ height: "20rem", p: "1rem" }}>
      <TabPanel value={choice} index={choice}>
        {choice === 0 ? <SignIn /> : <SignUp />}
      </TabPanel>
    </Box>
  );
};

export default Content;
