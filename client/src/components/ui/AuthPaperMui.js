import React from "react";
import { Paper } from "@mui/material";

const AppPaperMui = ({ children, otherStyles, ...otherProps }) => {
  return (
    <Paper {...otherProps} sx={{ minHeight: "100vh", ...otherStyles }}>
      {children}
    </Paper>
  );
};

export default AppPaperMui;
