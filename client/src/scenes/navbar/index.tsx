import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme, Button } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import { logout } from "../../firebase";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login"); // redirect user to login page
  };

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* Left Side */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          MercuryBoard
        </Typography>
      </FlexBetween>

      {/* Right Side */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("Dashboard")}
            style={{
              color: selected === "Dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("Predictions")}
            style={{
              color: selected === "Predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>

        {/* 🚀 Logout Button */}
        <Button
          onClick={handleLogout}
          sx={{ color: palette.grey[300], textTransform: "none" }}
        >
          Logout
        </Button>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
