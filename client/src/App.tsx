import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./scenes/navbar";
import DashBoard from "./scenes/dashboard";
import { GlobalStyles } from "@mui/material";
import Predictions from "./scenes/predictions";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <>
      <GlobalStyles
        styles={{
          "html, body": { height: "100%" },
          "html::-webkit-scrollbar": { width: "12px", height: "12px" },
          "html::-webkit-scrollbar-track": { background: "#1f1f1f" },
          "html::-webkit-scrollbar-thumb": {
            backgroundColor: "#000",
            borderRadius: "8px",
            border: "2px solid #1f1f1f",
          },
          html: {
            scrollbarWidth: "thin",
            scrollbarColor: "#000 #1f1f1f",
          },
        }}
      />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="app">
            <CssBaseline />
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Navbar />
              <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/predictions" element={<Predictions />} />
              </Routes>
            </Box>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
