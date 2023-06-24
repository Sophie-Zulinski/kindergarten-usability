import { FilterAlt } from '@mui/icons-material';
import { MobileStepper, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IndexKind } from 'typescript';
import KindergartenShow from '../components/KindergartenShow.js';
import ScrollToTopButton from '../components/ScrollToTopButton.js';
import { kindergartens } from '../data/kindergartens.js';
import { sortObjectsByName } from '../utils/utils.js';

function ResultsPage({ title }) {
  const [searchField, setSearchField] = useState('');
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
        <FilterAlt sx={{ color: 'secondary', mr: 1, my: 0.5 }} />
        <TextField
          variant="outlined"
          fullWidth
          color="secondary"
          id="search"
          label="Nach Name filtern"
          onChange={handleChange}
        />
      </div>
      {/* fixed: kiga.name instead of "index" (was not working with "index"*/}
      {filteredKigas.map((kiga, index) => (
        <KindergartenShow key={kiga.name} kiga={kiga} state={state} />
      ))}
      <div className="bottom-spacer"></div>
    </div>
  );
}

export default ResultsPage;
