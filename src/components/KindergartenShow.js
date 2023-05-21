import {
  AccessTime,
  BubbleChart,
  ChildCare,
  LocationOn,
  Map,
  Public,
} from "@mui/icons-material";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { joinAbbreviations } from "../utils/utils";

function KindergartenShow({ kiga, index, state }) {
  const navigate = useNavigate();

  const { searchParams } = state;

  const {
    district,
    allGroupSizes,
    allOpeningHours,
    allAgeGroups,
    publicOrPrivate,
  } = searchParams;

  const groupSizes = joinAbbreviations(allGroupSizes);
  const openingHours = joinAbbreviations(allOpeningHours);
  const ageGroups = joinAbbreviations(allAgeGroups);

  const showDetails = (e) => {
    e.preventDefault();
    navigate("/details", {
      state: {
        kiga,
        searchParams,
      },
    });
  };

  return (
    <Paper key={index} className="result-container" onClick={showDetails}>
      <div className="result-box col">
        <h3 className="result-headline">{kiga.name}</h3>
        <div className="row">
          <img
            alt="Kindergarten"
            src={`/images/kiga_${kiga.id}.png`}
            className="result-pic"
          />
          <div className="col result-infos">
            <div className="row center-vertical">
              <Map className="result-icon" />
              <p>{kiga.street}</p>
            </div>
            <div className="row center-vertical">
              <LocationOn className="result-icon" />
              <p>{district === "" ? kiga.district : district}</p>
            </div>
            <div className="row center-vertical">
              <AccessTime className="result-icon" />
              <p>
                {allOpeningHours.length === 0
                  ? kiga.openingHours.join(", ")
                  : openingHours}
              </p>
            </div>
            <div className="row center-vertical">
              <BubbleChart className="result-icon" />
              <p>
                {allGroupSizes.length === 0
                  ? kiga.groupSizes.join(", ")
                  : groupSizes}
              </p>
            </div>
            <div className="row center-vertical">
              <ChildCare className="result-icon" />
              <p>
                {allAgeGroups.length === 0
                  ? kiga.ageGroups.join(", ")
                  : ageGroups}
              </p>
            </div>
            <div className="row center-vertical">
              <Public className="result-icon" />
              <p>
                {publicOrPrivate === ""
                  ? kiga.publicOrPrivate
                  : publicOrPrivate}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Button
        variant="contained"
        className="result-button"
        startIcon={<Loupe />}
        sx={{ position: "absolute", bottom: "15px", right: "15px" }}
        onClick={showDetails}
      >
        Details
      </Button> */}
    </Paper>
  );
}

export default KindergartenShow;
