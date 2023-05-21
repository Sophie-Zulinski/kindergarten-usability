import { useEffect } from "react";
import { SentimentVeryDissatisfied } from "@mui/icons-material";

function ErrorPage({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="not-found col center-vertical">
      <SentimentVeryDissatisfied sx={{ fontSize: "80px" }} />
      <p>Uuups, die Seite existiert nicht</p>
    </div>
  );
}

export default ErrorPage;
