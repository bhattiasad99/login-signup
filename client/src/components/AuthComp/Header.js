import PropTypes from "prop-types";
import React from "react";
import { Tabs, Tab } from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Header = ({ getValue }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    getValue(newValue);
  };

  return (
    <Tabs
      variant="fullWidth"
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
    >
      <Tab label="Log In" {...a11yProps(0)} />
      <Tab label="Sign Up" {...a11yProps(1)} />
    </Tabs>
  );
};

export default Header;

Header.propTypes = {
  getValue: PropTypes.func,
};

Header.defaultProps = {
  getValue: (e) => console.log("NO PROP GIVEN TO OBJECT: ", e),
};
