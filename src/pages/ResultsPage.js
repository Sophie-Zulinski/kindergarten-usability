import { useEffect, useState } from "react";
import { MobileStepper, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { kindergartens } from "../data/kindergartens";
import KindergartenShow from "../components/KindergartenShow";
import { FilterAlt } from "@mui/icons-material";
import { sortObjectsByName } from "../utils/utils";

function ResultsPage({ title }) {
  const [searchField, setSearchField] = useState("");
  const { pathname, state } = useLocation();

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const sortedKigas = sortObjectsByName(kindergartens);

  const filteredKigas = sortedKigas.filter((kiga) => {
    return kiga.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="container col">
      <ScrollToTopButton />
      <div className="headline-box col center-all">
        <MobileStepper
          variant="dots"
          steps={4}
          activeStep={0}
          position="static"
          backButton={null}
          nextButton={null}
        />
        <h3 className="headline">Wähle den passenden Kindergarten</h3>
      </div>
      <div className="row search-field center-vertical">
        <FilterAlt sx={{ color: "secondary", mr: 1, my: 0.5 }} />
        <TextField
          variant="outlined"
          fullWidth
          color="secondary"
          id="search"
          label="Nach Name filtern"
          onChange={handleChange}
        />
      </div>
      {filteredKigas.map((kiga, index) => (
        <KindergartenShow key={index} kiga={kiga} state={state} />
      ))}
      <div className="bottom-spacer"></div>
    </div>
  );
}

export default ResultsPage;
