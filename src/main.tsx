import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.scss";
import "./styles/index.scoped.scss";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App.tsx";
import currentTheme from "./themes/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
