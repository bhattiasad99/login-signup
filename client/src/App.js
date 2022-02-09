import React from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Stack, Box } from "@mui/material";
import AppPaperMui from "./AppPaperMui";
import Card from "./components/ui/Card";
import Wrapper from "./components/Wrapper";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const themeAccessor = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <AppPaperMui
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card width="35%">
          <Wrapper />
        </Card>
      </AppPaperMui>
    </ThemeProvider>
  );
}

export default App;
