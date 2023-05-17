import { useEffect } from "react";
import { MobileStepper } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { StyledBackButton } from "../components/StyledBackButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { kindergartens } from "../data/kindergartens";
import KindergartenShow from "../components/KindergartenShow";

function ResultsPage({ title }) {
  const { pathname } = useLocation;
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const { state } = useLocation();
  const {
    district,
    groupSize,
    publicOrPrivate,
    allOpeningHours,
    allAgeGroups,
  } = state;

  const searchParams = {
    district,
    groupSize,
    publicOrPrivate,
    allOpeningHours,
    allAgeGroups,
  };

  // filter logic
  // const filteredKigas = kindergartens.filter((kiga) => kiga.district === 3);

  return (
    <div className="container col">
      <ScrollToTopButton />
      <div className="headline-box col center">
        <MobileStepper
          variant="dots"
          steps={5}
          activeStep={1}
          position="static"
          backButton={null}
          nextButton={null}
          sx={{ marginBottom: "10px" }}
        />
        <h3 className="headline">Wähle den passenden Kindergarten</h3>
      </div>
      {kindergartens.map((kiga, index) => (
        <KindergartenShow
          key={index}
          kiga={kiga}
          index={index}
          searchParams={searchParams}
        />
      ))}
      <div className="col center">
        <h3 className="bottomline">Nichts passendes dabei?</h3>
        <StyledBackButton
          startIcon={<ArrowBack />}
          variant="contained"
          className="btn__start"
          sx={{
            width: 250,
            marginTop: "24px",
            marginBottom: "100px",
          }}
        >
          <Link to="/search">Neue Suche starten</Link>
        </StyledBackButton>
      </div>
    </div>
  );
}

export default ResultsPage;
