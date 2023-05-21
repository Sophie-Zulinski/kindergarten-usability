import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function LandingPage() {
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Kindergartensuche";
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      navigate("/information");
    }, 3000);
  }, [navigate]);

  return (
    <div className="landing-page col center-all">
      {showSpinner && (
        <div className="snackbar snackbar-info snackbar-bottom-home row">
          <CircularProgress size="1rem" sx={{ color: "white" }} />
          <p className="snackbar-text">Applikation lädt...</p>
        </div>
      )}
      <img
        src="/images/kindergarten_text.png"
        alt="Kindergarten"
        className="logo"
      ></img>
    </div>
  );
}

export default LandingPage;
