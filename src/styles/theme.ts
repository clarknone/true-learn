import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#48A2E9",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#BF0000",
      light: "#7C7B7B",
    },
  },
  typography: {
    fontFamily: [
      "Plus Jakarta Sans",
      "Poppins",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
