import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as AuthComp from "./components/AuthComp";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [auth, setAuth] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      {!auth ? <AuthComp.default /> : <p>AUTHENTICATED</p>}
    </ThemeProvider>
  );
}

export default App;
