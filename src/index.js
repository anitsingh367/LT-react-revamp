import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
let theme = createTheme({
  palette: {
    primary: {
      main: "#29af8a",
      contrastText: "#fff",
    },
    secondary: {
      main: "#435061",
      light: "rgba(67, 80, 97, 12%)",
      contrastText: "#fff",
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "#FF0000",
        },
      },
    },
  },
});
// theme = createTheme(theme, {
//   palette: {
//     primary: theme.palette.augmentColor({
//       color: {
//         main: "#29af8a",
//       },
//     }),
//     secondary: theme.palette.augmentColor({
//       color: {
//         main: "#435061",
//       },
//     }),
//   },
// });
console.log(theme);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
