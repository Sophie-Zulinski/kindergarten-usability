import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
  OutlinedInput,
  Checkbox,
  ListItemText,
  MobileStepper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { StyledMainButton } from "../components/StyledMainButton";

const districts = [
  "",
  "1. Bezirk",
  "2. Bezirk",
  "3. Bezirk",
  "4. Bezirk",
  "5. Bezirk",
  "6. Bezirk",
  "7. Bezirk",
  "8. Bezirk",
  "9. Bezirk",
  "10. Bezirk",
  "11. Bezirk",
  "12. Bezirk",
  "13. Bezirk",
  "14. Bezirk",
  "15. Bezirk",
  "16. Bezirk",
  "17. Bezirk",
  "18. Bezirk",
  "19. Bezirk",
  "20. Bezirk",
  "21. Bezirk",
  "22. Bezirk",
  "23. Bezirk",
];

// const groupSizeOptions = [
//   {
//     "": "",
//   },
//   {
//     S: "weniger als 5 Kinder",
//   },
//   {
//     M: "bis zu 10 Kinder",
//   },
//   {
//     L: "bis zu 15 Kinder",
//   },
//   {
//     XL: "mehr als 15 Kinder",
//   },
// ];

const groupSizeOptions = [
  "weniger als 5 Kinder",
  "bis zu 10 Kinder",
  "bis zu 15 Kinder",
  "mehr als 15 Kinder",
];

const publicOrPrivateOptions = ["", "Öffentlich", "Privat"];

const openingHoursOptions = [
  "H - Stundenweise",
  "VM - Vormittags",
  "NM - Nachmittags",
  "GT - Ganztags",
];

const ageGroupsOptions = ["0 - 2 Jahre", "3 - 4 Jahre", "5 Jahre"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SearchPage({ title }) {
  const navigate = useNavigate();

  const [district, setDistrict] = useState("");
  const [districtError, setDistrictError] = useState(false);

  const [allOpeningHours, setAllOpeningHours] = useState([]);
  const [groupSize, setGroupSize] = useState("");
  const [allAgeGroups, setAllAgeGroups] = useState([]);
  const [publicOrPrivate, setPublicOrPrivate] = useState("");

  useEffect(() => {
    document.title = title;
  }, [title]);

  const startSearch = (e) => {
    e.preventDefault();
    setDistrictError(district === "" ? true : false);
    district !== "" &&
      navigate("/results", {
        state: {
          district,
          allOpeningHours,
          groupSize,
          allAgeGroups,
          publicOrPrivate,
        },
      });
  };

  const handleOpeningHoursChange = (event) => {
    const {
      target: { value },
    } = event;
    setAllOpeningHours(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleAgeGroupsChange = (event) => {
    const {
      target: { value },
    } = event;
    setAllAgeGroups(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="container col">
      <div className="headline-box">
        <MobileStepper
          variant="dots"
          steps={4}
          activeStep={0}
          position="static"
          backButton={null}
          nextButton={null}
          sx={{ marginBottom: "10px" }}
        />
        <h3 className="headline">Nenne uns zunächst deine Suchkriterien...</h3>
      </div>
      <div className="input-box">
        <FormControl
          required
          color="secondary"
          fullWidth
          sx={{ marginBottom: "15px" }}
          error={districtError}
        >
          <InputLabel id="district">Bezirk</InputLabel>
          <Select
            labelId="district"
            id="district"
            value={district}
            label="Bezirk"
            onChange={(e) => setDistrict(e.target.value)}
          >
            {districts.map((district) => (
              <MenuItem key={district} value={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
          {districtError ? (
            <FormHelperText sx={{ color: "red" }}>
              Bitte Bezirk angeben!
            </FormHelperText>
          ) : (
            ""
          )}
        </FormControl>

        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="openingHours">Betreuungszeiten</InputLabel>
          <Select
            labelId="openingHours"
            id="openingHours"
            multiple
            value={allOpeningHours}
            onChange={handleOpeningHoursChange}
            input={
              <OutlinedInput
                id="select-multiple-chip"
                label="Betreuungszeiten"
              />
            }
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {openingHoursOptions.map((openingHours) => (
              <MenuItem key={openingHours} value={openingHours}>
                <Checkbox
                  color="secondary"
                  checked={allOpeningHours.indexOf(openingHours) > -1}
                />
                <ListItemText primary={openingHours} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="group-size">Gruppengröße</InputLabel>
          <Select
            labelId="group-size"
            id="group-size"
            value={groupSize}
            label="Gruppengröße"
            onChange={(e) => setGroupSize(e.target.value)}
          >
            {groupSizeOptions.map((groupSize) => (
              <MenuItem key={groupSize} value={groupSize}>
                <Checkbox
                  color="secondary"
                  checked={allAgeGroups.indexOf(groupSize) > -1}
                />
                <ListItemText primary={groupSize} />
              </MenuItem>
            ))}
            {/* {groupSizeOptions.map((groupSize) => {
              Object.keys(groupSize).map((key) => {
                <MenuItem key={key} value={groupSize[key]}>
                  {groupSize}
                </MenuItem>;
              });
            })} */}
          </Select>
        </FormControl>

        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="openingHours">Altersgruppen</InputLabel>
          <Select
            labelId="ageGroups"
            id="ageGroups"
            multiple
            value={allAgeGroups}
            onChange={handleAgeGroupsChange}
            input={
              <OutlinedInput id="select-multiple-chip" label="Altersgruppen" />
            }
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {ageGroupsOptions.map((ageGroup) => (
              <MenuItem key={ageGroup} value={ageGroup}>
                <Checkbox
                  color="secondary"
                  checked={allAgeGroups.indexOf(ageGroup) > -1}
                />
                <ListItemText primary={ageGroup} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="publicOrPrivate">Öffentlich / Privat</InputLabel>
          <Select
            labelId="publicOrPrivate"
            id="publicOrPrivate"
            value={publicOrPrivate}
            label="Öffentlich / Privat"
            onChange={(e) => setPublicOrPrivate(e.target.value)}
          >
            {publicOrPrivateOptions.map((publicOrPrivate) => (
              <MenuItem key={publicOrPrivate} value={publicOrPrivate}>
                {publicOrPrivate}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="button-flex-container">
        <StyledMainButton
          startIcon={<SearchIcon />}
          variant="contained"
          className="btn__start"
          sx={{
            width: 250,
            marginTop: "24px",
            marginBottom: "100px",
          }}
          onClick={startSearch}
        >
          <Link to="/search">Suche starten</Link>
        </StyledMainButton>
      </div>
    </div>
  );
}

export default SearchPage;
