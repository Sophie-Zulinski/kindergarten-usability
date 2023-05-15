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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const radiusOptions = [
  "",
  "weniger als 15km",
  "bis zu 30km",
  "bis zu 50km",
  "mehr als 50km",
];

const groupSizeOptions = [
  "",
  "S - weniger als 5 Kinder",
  "M - bis zu 10 Kinder",
  "L - bis zu 15 Kinder",
  "XL - mehr als 15 Kinder",
];

const publicOrPrivateOptions = ["", "Öffentlich", "Privat"];

const openingHoursOptions = [
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
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);

  const [radius, setRadius] = useState("");
  const [radiusError, setRadiusError] = useState(false);

  const [allOpeningHours, setAllOpeningHours] = useState([]);
  const [groupSize, setGroupSize] = useState("");
  const [allAgeGroups, setAllAgeGroups] = useState([]);
  const [publicOrPrivate, setPublicOrPrivate] = useState("");

  useEffect(() => {
    document.title = title;
  }, [title]);

  const startSearch = (e) => {
    e.preventDefault();
    setAddressError(address === "" ? true : false);
    setRadiusError(radius === "" ? true : false);
    address !== "" && radius !== "" && navigate("/results");
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
        <h3 className="headline">Nenne uns zunächst deine Suchkriterien...</h3>
      </div>
      <div className="input-box">
        <TextField
          required
          color="secondary"
          fullWidth
          sx={{ marginBottom: "15px" }}
          id="address"
          label="Wohnadresse"
          variant="outlined"
          onChange={(e) => setAddress(e.target.value)}
          error={addressError}
          helperText={addressError && "Bitte Wohnadresse angeben!"}
        />

        <FormControl
          required
          color="secondary"
          fullWidth
          sx={{ marginBottom: "15px" }}
          error={radiusError}
        >
          <InputLabel id="radius">Umkreis</InputLabel>
          <Select
            labelId="radius"
            id="radius"
            value={radius}
            label="Umkreis"
            onChange={(e) => setRadius(e.target.value)}
          >
            {radiusOptions.map((radius) => (
              <MenuItem key={radius} value={radius}>
                {radius}
              </MenuItem>
            ))}
          </Select>
          {radiusError ? (
            <FormHelperText sx={{ color: "red" }}>
              Bitte Umkreis angeben!
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
                {groupSize}
              </MenuItem>
            ))}
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
        <Button
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
        </Button>
      </div>
    </div>
  );
}

export default SearchPage;
