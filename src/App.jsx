import React from "react";
import Home from "./pages/home";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";

const theme = {
  palette: {
    primary: "#19A7CE",
    secondary: "#146C94",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#4B4B4B",
    lightgray: "#828282",
  },
  indicator: {
    warning: "#FE1405",
    clean: "#00DA58",
    sus: "#A18800",
  },
  bg: "#F6F1F1",

  placeholder: "#5E5E5E;",
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Home />
      </>
    </ThemeProvider>
  );
};

export default App;
