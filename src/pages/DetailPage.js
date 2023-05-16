import { useEffect } from "react";
import { StyledBackButton } from "../components/StyledBackButton";
import { StyledMainButton } from "../components/StyledMainButton";
import { Paper, MobileStepper, LinearProgress, Chip } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { kindergartens } from "../data/kindergartens";
import {
  ArrowBack,
  Send,
  AccessTime,
  BubbleChart,
  ChildCare,
  LocationOn,
  Map,
  Public,
} from "@mui/icons-material";
import ScrollToTopButton from "../components/ScrollToTopButton";

function DetailPage({ title }) {
  const { pathname, state } = useLocation();

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const { kigaIndex } = state;

  return (
    <div className="container col">
      <ScrollToTopButton />
      <div className="headline-box col center">
        <MobileStepper
          variant="dots"
          steps={4}
          activeStep={2}
          position="static"
          backButton={null}
          nextButton={null}
          sx={{ marginBottom: "10px" }}
        />
        <h3 className="headline">Hier findest du die Einzelheiten</h3>
      </div>
      <div>
        <Paper>
          <div className="box col">
            <img
              alt="Kindergarten"
              src={`/images/kiga_${kindergartens[kigaIndex].id}.png`}
              className="result-pic"
            />
            <div className="col">
              <h3 className="result-headline">
                {kindergartens[kigaIndex].name}
              </h3>
              <div className="row vert-center">
                <Map className="result-icon" />
                <p>{kindergartens[kigaIndex].street}</p>
              </div>
              <div className="row vert-center">
                <LocationOn className="result-icon" />
                <p>{kindergartens[kigaIndex].district}</p>
              </div>
              <div className="row vert-center">
                <AccessTime className="result-icon" />
                {kindergartens[kigaIndex].openingHours.join(", ")}
              </div>
              <div className="row vert-center">
                <BubbleChart className="result-icon" />
                {kindergartens[kigaIndex].groupSize.join(", ")}
              </div>
              <div className="row vert-center">
                <ChildCare className="result-icon" />
                <p>{kindergartens[kigaIndex].ageGroups.join(", ")}</p>
              </div>
              <div className="row vert-center">
                <Public className="result-icon" />
                <p>{kindergartens[kigaIndex].publicOrPrivate}</p>
              </div>
            </div>
            <p className="availability">
              {Math.floor(Math.random() * 100)}% Auslastung
            </p>
            <LinearProgress
              variant="determinate"
              value={75}
              sx={{
                height: "10px",
                borderRadius: "5px",
                backgroundColor: "#EEEEEE",
              }}
            />
            <div className="row chip-box">
              <div className="col chip-box-col">
                <Chip
                  label="LGBTIQ+"
                  color="primary"
                  style={{ width: "117px" }}
                />
                <Chip
                  label="Glutenfrei"
                  color="primary"
                  style={{ width: "117px" }}
                />
                <Chip
                  label="Ausflüge"
                  color="primary"
                  style={{ width: "117px" }}
                />
              </div>
              <div className="col chip-box-col">
                <Chip
                  label="Vegetarisch"
                  color="primary"
                  style={{ width: "117px" }}
                />
                <Chip
                  label="Garten"
                  color="primary"
                  style={{ width: "117px" }}
                />
                <Chip
                  label="Ganztags"
                  color="primary"
                  style={{ width: "117px" }}
                />
              </div>
            </div>
            <div className="kiga-text">
              {" "}
              Hallo!
              <br />
              Wir sind der Kindergarten{" "}
              <b>{kindergartens[kigaIndex].name} 😄</b>
              <br />
              <b>
                Wir freuen uns sehr, dass du dich für unseren Kindergarten
                interessierst!
              </b>{" "}
              🙋
              <br />
              <br />
              Wir befinden uns{" "}
              <b>
                mitten im Zentrum des wunderschönen 3. Gemeindebezirks in Wien
              </b>{" "}
              🏡 und{" "}
              <b>
                bieten neben kleinen (S) auch mittelgroßen (M) Gruppengrößen
              </b>
              . Wir freuen uns sehr Kinder von <b>0 - 5</b> Jahren in unserem
              Haus begrüßen zu dürfen und verfolgen das Konzept der{" "}
              <b>altermäßig gemischten Gruppen</b>. 👩‍👧‍👦
              <br />
              <br />
              Neben gewöhnlichem <b>Mittagessen</b> 🍲 gibt es bei uns außerdem
              die Option zwischen{" "}
              <b>vegetarischen 🥬 sowie glutenfreien 🌾 Menüs</b> zu wählen.
              Bitte gib uns das wenn möglich gleich zu Beginn bei der Anfrage
              bzw. Anmeldung bekannt! So kann sichergestellt werden, dass gleich
              von Beginn an für die Wünsche deines Kindes gesorgt ist.
              <br />
              <br />
              Wir denken, dass sich Kinder nur dann optimal entfalten können
              wenn sie auch <b>viel frische Luft 🍃 und Platz zum spielen</b> 🧸
              🚂 🪀 haben. Deshalb stehen <b>Ausflüge ins Grüne</b> ☘️ ganz oben
              auf unserem Programm!
              <br />
              <br />
              Ganz besonders freuen wir uns auch über{" "}
              <b>Kinder von Regenbogenfamilien</b> 🌈 🌈 🌈
              <br />
              <br />
              Solltest du weitere Fragen haben oder sonstige Anliegen schick uns
              gerne eine Anfrage!
            </div>
          </div>
        </Paper>
      </div>
      <div className="col center">
        <StyledMainButton
          startIcon={<Send />}
          variant="contained"
          sx={{
            marginBottom: "25px",
          }}
          // onClick={startSearch}
        >
          <Link to="/search">Anfrage schicken</Link>
        </StyledMainButton>

        <h3 className="bottomline">Andere Kindergärten ansehen?</h3>
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
          <Link to="/results">Zurück zu den Resultaten</Link>
        </StyledBackButton>
      </div>
    </div>
  );
}

export default DetailPage;
