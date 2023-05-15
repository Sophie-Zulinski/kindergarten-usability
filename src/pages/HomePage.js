import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    document.title = "Kindergartensuche";
  }, []);

  return (
    <div className="landing-page">
      <img
        src="/images/kindergarten_text.png"
        alt="Kindergarten"
        style={{ width: "300px" }}
      ></img>
      <br />
      <Button
        variant="contained"
        startIcon={<ArrowForwardIcon />}
        sx={{
          width: 250,
        }}
      >
        <Link to="/information">Zur Kindergartensuche</Link>
      </Button>
      <br />
      <Button
        variant="outlined"
        startIcon={<AccountCircleIcon />}
        className="landing-page-outlined-btn"
        sx={{
          color: "#000000",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderColor: "#FFFFFF",
          width: 250,
        }}
      >
        <Link to="/login">Login</Link>
      </Button>
    </div>
  );
}

export default LandingPage;
