import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Content from "./Content";

const Wrapper = (props) => {
  const [selected, setSelected] = React.useState(0);
  const retrieveStateHandler = (e) => {
    setSelected(e);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Header getValue={retrieveStateHandler} />
        <Content choice={selected} />
      </Box>
    </React.Fragment>
  );
};

export default Wrapper;
