import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo, useEffect, useState } from "react";
import { themeSettings } from "./theme";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./scenes/navbar";
import DashBoard from "./scenes/dashboard";
import { GlobalStyles } from "@mui/material";
import Predictions from "./scenes/predictions";
import Login from "./scenes/login/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <div style={{ color: "white" }}>Loading...</div>;

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
              {/* Hide navbar on login page */}
              {user && <Navbar />}

              <Routes>
                {/* Default route → If not logged in → Login page */}
                <Route
                  path="/"
                  element={user ? <DashBoard /> : <Navigate to="/login" />}
                />

                {/* Predictions page (Protected) */}
                <Route
                  path="/predictions"
                  element={user ? <Predictions /> : <Navigate to="/login" />}
                />

                {/* Login route */}
                <Route
                  path="/login"
                  element={!user ? <Login /> : <Navigate to="/" />}
                />
              </Routes>
            </Box>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
