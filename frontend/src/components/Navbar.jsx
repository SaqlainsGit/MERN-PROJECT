import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box
} from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>

        {/* LEFT */}
        <Box sx={{ flex: 1 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/search">
            Search
          </Button>
        </Box>

        {/* CENTER */}
        <Typography
          variant="h6"
          sx={{ flex: 1, textAlign: "center", fontWeight: "bold" }}
        >
          🎬 MovieMania
        </Typography>

        {/* RIGHT */}
        <Box sx={{ flex: 1, textAlign: "right" }}>
          {user?.role === "ADMIN" && (
            <Button color="inherit" component={Link} to="/add">
              Add Movie
            </Button>
          )}

          {!user ? (
            <Button color="inherit" component={Link} to="/login">
              Admin Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
