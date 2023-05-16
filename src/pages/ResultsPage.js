import { useEffect } from "react";
import { Paper, MobileStepper, Button } from "@mui/material";
import { useLocation } from "react-router";
import {
  AccessTime,
  ArrowBack,
  BubbleChart,
  ChildCare,
  LocationOn,
  Loupe,
  Map,
  Public,
  PublicOff,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { StyledBackButton } from "../components/StyledBackButton";
import ScrollToTopButton from "../components/ScrollToTopButton";

const kindergartens = [
  {
    name: "Hofmühlgasse",
    street: "Hofmühlgasse 19",
    district: 3,
    openingHours: ["H", "VM", "NM", "GT"],
    groupSize: ["S", "M"],
    ageGroups: ["0-2", "3-4", "5"],
    publicOrPrivate: "Öffentlich",
  },
  {
    name: "Allandweg",
    street: "Allandweg 13",
    district: 3,
    openingHours: ["VM", "NM"],
    groupSize: ["M", "L"],
    ageGroups: ["3-4", "5"],
    publicOrPrivate: "Öffentlich",
  },
  {
    name: "Aspernhof",
    street: "Aspernstraße 64",
    district: 3,
    openingHours: ["H", "VM", "NM"],
    groupSize: ["S", "M"],
    ageGroups: ["0-2", "3-4", "5"],
    publicOrPrivate: "Öffentlich",
  },
  {
    name: "Kirschblütenweg",
    street: "Kirschblütenweg 3",
    district: 3,
    openingHours: ["H", "VM", "NM", "GT"],
    groupSize: ["S", "M"],
    ageGroups: ["0-2", "3-4", "5"],
    publicOrPrivate: "Privat",
  },
  {
    name: "Achenergasse",
    street: "Achenergasse 35",
    district: 3,
    openingHours: ["H", "VM", "NM"],
    groupSize: ["S", "M"],
    ageGroups: ["0-2", "3-4", "5"],
    publicOrPrivate: "Öffentlich",
  },
  {
    name: "Wienerweg",
    street: "Wienerweg 1",
    district: 3,
    openingHours: ["H"],
    groupSize: ["S"],
    ageGroups: ["0-2"],
    publicOrPrivate: "Privat",
  },
  {
    name: "Rossenschacherallee",
    street: "Rossenschacheralle 21",
    district: 4,
    openingHours: ["H", "VM", "NM"],
    groupSize: ["S", "M"],
    ageGroups: ["0-2", "3-4", "5"],
    publicOrPrivate: "Öffentlich",
  },
];

function ResultsPage({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const { state } = useLocation();
  const {
    district,
    groupSize,
    publicOrPrivate,
    allOpeningHours,
    allAgeGroups,
  } = state;

  // filter logic
  // const filteredKigas = kindergartens.filter((kiga) => kiga.district === 3);

  return (
    <div className="container">
      <ScrollToTopButton />
      <div className="headline-box">
        <MobileStepper
          variant="dots"
          steps={4}
          activeStep={1}
          position="static"
          backButton={null}
          nextButton={null}
          sx={{ marginBottom: "10px" }}
        />
        <h3 className="headline">Wähle den passenden Kindergarten</h3>
      </div>
      {kindergartens.map((kiga, index) => (
        <Paper className="result-container">
          <Button
            variant="contained"
            className="result-button"
            startIcon={<Loupe />}
            sx={{ position: "absolute", bottom: "15px", right: "15px" }}
          >
            Details
          </Button>
          <div className="result-box col">
            <img
              alt="Kindergarten"
              src={`/images/kiga_${index + 1}.png`}
              className="result-pic"
            />
            <div className="col">
              <h3 className="result-headline">{kiga.name}</h3>
              <div className="row">
                <Map className="result-icon" />
                <p>{kiga.street}</p>
              </div>
              <div className="row">
                <LocationOn className="result-icon" />
                <p>{kiga.district}</p>
              </div>
              <div className="row">
                <AccessTime className="result-icon" />
                {kiga.openingHours.join(", ")}
              </div>
              <div className="row">
                <BubbleChart className="result-icon" />
                {kiga.groupSize.join(", ")}
              </div>
              <div className="row">
                <ChildCare className="result-icon" />
                <p>{kiga.ageGroups.join(", ")}</p>
              </div>
              <div className="row">
                <Public className="result-icon" />
                <p>{kiga.publicOrPrivate}</p>
              </div>
            </div>
          </div>
        </Paper>
      ))}
      <div className="button-flex-container">
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
