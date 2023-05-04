import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#D42530",
    },
    background: {
      default: "#000000",
    },
  },
  typography: {
    fontSize: 16,
    fontWeight: "400",
    body1: {
      fontSize: "14px",
      lineHeight: 2.4,
      margin: 0,
      marginBottom: "0",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: "1400px", // Set your desired width here
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#000000",
        },
        root: {
          borderBottom: "0.9px solid rgba(255, 255, 255, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          pudding: "20px",
          minWidth: "100px",
        },
      },
    },
    // MuiToolbar: {
    // 	styleOverrides: {
    // 		root: {
    // 			padding: "0px",
    // 		},
    // 	},
    // },
  },
});
