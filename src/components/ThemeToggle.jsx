import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline, Switch, Box, Typography } from "@mui/material";

const ThemeToggle = ({ children }) => {
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("themeMode");
      return stored === "dark" || stored === "light" ? stored : "light";
    }

    return "light";
  });

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

        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                scrollbarColor:
                  mode === "dark"
                    ? "#888 #1a1a1a"
                    : "#888 #f5f5f5",
              },

              "::-webkit-scrollbar": {
                width: "8px",
              },

              "::-webkit-scrollbar-track": {
                backgroundColor:
                  mode === "dark" ? "#1a1a1a" : "#f5f5f5",
              },

              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "8px",
              },

              "::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555",
              },
            },
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
            setMode((prev) => {
              const next = prev === "light" ? "dark" : "light";
              if (typeof window !== "undefined") {
                window.localStorage.setItem("themeMode", next);
              }
              return next;
            })
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
