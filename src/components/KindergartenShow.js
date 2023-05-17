import {
  AccessTime,
  BubbleChart,
  ChildCare,
  LocationOn,
  Loupe,
  Map,
  Public,
} from "@mui/icons-material";
import { Paper, Button } from "@mui/material";
import { kindergartens } from "../data/kindergartens";
import { Link, useNavigate } from "react-router-dom";

function KindergartenShow({ kiga, index, searchParams }) {
  const navigate = useNavigate();

  const {
    district,
    groupSize,
    publicOrPrivate,
    allOpeningHours,
    allAgeGroups,
  } = searchParams;

  const showDetails = (e) => {
    e.preventDefault();
    navigate("/details", {
      state: {
        kigaIndex: index,
      },
    });
  };

  return (
    <Paper key={index} className="result-container">
      <div className="box col">
        <img
          alt="Kindergarten"
          src={`/images/kiga_${kiga.id}.png`}
          className="result-pic"
        />
        <div className="col">
          <h3 className="result-headline">{kindergartens[index].name}</h3>
          <div className="row vert-center">
            <Map className="result-icon" />
            <p>{kindergartens[index].street}</p>
          </div>
          <div className="row vert-center">
            <LocationOn className="result-icon" />
            <p>{district}</p>
          </div>
          <div className="row vert-center">
            <AccessTime className="result-icon" />
            {kindergartens[index].openingHours.join(", ")}
          </div>
          <div className="row vert-center">
            <BubbleChart className="result-icon" />
            {kindergartens[index].groupSize.join(", ")}
          </div>
          <div className="row vert-center">
            <ChildCare className="result-icon" />
            <p>{kindergartens[index].ageGroups.join(", ")}</p>
          </div>
          <div className="row vert-center">
            <Public className="result-icon" />
            <p>{kindergartens[index].publicOrPrivate}</p>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        className="result-button"
        startIcon={<Loupe />}
        sx={{ position: "absolute", bottom: "15px", right: "15px" }}
        onClick={showDetails}
      >
        <Link to="/details">Details</Link>
      </Button>
    </Paper>
  );
}

export default KindergartenShow;
