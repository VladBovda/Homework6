import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline, Switch, Box, Typography } from "@mui/material";

const ThemeToggle = ({ children }) => {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default:
              mode === "dark"
                ? "hsl(230, 17%, 14%)"
                : "hsl(0, 0%, 100%)",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: "fixed",
          top: 8,
          right: 16,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Light
        </Typography>
        <Switch
          checked={mode === "dark"}
          onChange={() =>
            setMode((prev) => (prev === "light" ? "dark" : "light"))
          }
        />
        <Typography variant="body2" color="text.secondary">
          Dark
        </Typography>
      </Box>
      {children}
    </ThemeProvider>
  );
};

export default ThemeToggle;
