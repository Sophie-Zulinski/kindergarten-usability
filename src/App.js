import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import DetailPage from './pages/DetailPage.js';
import ErrorPage from './pages/ErrorPage.js';
import HomePage from './pages/HomePage.js';
import InformationPage from './pages/InformationPage.js';
import InquiryPage from './pages/InquiryPage.js';
import ResultsPage from './pages/ResultsPage.js';
import SearchPage from './pages/SearchPage.js';
import SuccessPage from './pages/SuccessPage.js';
import theme from './styles/theme.js';

const titles = {
  '/': {
    route: '',
    header: 'Home',
    document: 'Kindergartenwahl',
  },
  '/home': {
    route: 'home',
    header: 'Home',
    document: 'Kindergartenwahl',
  },
  '/information': {
    route: 'information',
    header: 'Informationen',
    document: 'Kindergartenwahl: Informationen',
  },
  '/search': {
    route: 'search',
    header: 'Suche',
    document: 'Kindergartenwahl: Suche',
  },
  '/results': {
    route: 'results',
    header: 'Liste der verfügbaren Kindergärten',
    document: 'Kindergartenwahl: Liste der verfügbaren Kindergärten',
  },
  '/details': {
    route: 'details',
    header: 'Details',
    document: 'Kindergartenwahl: Details',
  },
  '/inquiry': {
    route: 'inquiry',
    header: 'Anfrage senden',
    document: 'Kindergartenwahl: Anfrage senden',
  },
  '/success': {
    route: 'success',
    header: 'Anfrage',
    document: 'Kindergartenwahl: Anfrage versandt',
  },
};

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [pageTitle, setPageTitle] = useState('');
  const [documentTitle, setDocumentTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (Object.keys(titles).indexOf(location.pathname) !== -1) {
      setPageTitle(titles[location.pathname].header);
      setDocumentTitle(titles[location.pathname].document);
    } else {
      setPageTitle('404 Seite existiert nicht');
      setDocumentTitle('404 Seite existiert nicht');
    }

    location.pathname === '/' || location.pathname === '/home'
      ? setShowLandingPage(true)
      : setShowLandingPage(false);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      {!showLandingPage ? <Header title={pageTitle} /> : ''}
      <Routes>
        <Route path="/" element={<HomePage title={documentTitle} />} />
        <Route path="/home" element={<HomePage title={documentTitle} />} />
        <Route
          path="/information"
          element={<InformationPage title={documentTitle} />}
        />
        <Route path="/search" element={<SearchPage title={documentTitle} />} />
        <Route
          path="/results"
          element={<ResultsPage title={documentTitle} />}
        />
        <Route path="/details" element={<DetailPage title={documentTitle} />} />
        <Route
          path="/inquiry"
          element={<InquiryPage title={documentTitle} />}
        />
        <Route
          path="/success"
          element={<SuccessPage title={documentTitle} />}
        />
        <Route path="*" element={<ErrorPage title={documentTitle} />} />
      </Routes>
      {!showLandingPage ? (
        <Footer route={titles[location.pathname].route} />
      ) : (
        ''
      )}
    </ThemeProvider>
  );
}

export default App;
