import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import InformationPage from "./pages/InformationPage";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import ResultsPage from "./pages/ResultsPage";
import DetailPage from "./pages/DetailPage";
import { useEffect, useState } from "react";
import InquiryPage from "./pages/InquiryPage";
import SuccessPage from "./pages/SuccessPage";
import Footer from "./components/Footer";

const titles = {
  "/": {
    route: "",
    header: "Home",
    document: "Kindergartenwahl",
  },
  "/home": {
    route: "home",
    header: "Home",
    document: "Kindergartenwahl",
  },
  "/information": {
    route: "information",
    header: "Informationen",
    document: "Kindergartenwahl: Informationen",
  },
  "/search": {
    route: "search",
    header: "Suche",
    document: "Kindergartenwahl: Suche",
  },
  "/results": {
    route: "results",
    header: "Liste der verfügbaren Kindergärten",
    document: "Kindergartenwahl: Liste der verfügbaren Kindergärten",
  },
  "/details": {
    route: "details",
    header: "Details",
    document: "Kindergartenwahl: Details",
  },
  "/inquiry": {
    route: "inquiry",
    header: "Anfrage senden",
    document: "Kindergartenwahl: Anfrage senden",
  },
  "/success": {
    route: "success",
    header: "Anfrage",
    document: "Kindergartenwahl: Anfrage versandt",
  },
};

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [pageTitle, setPageTitle] = useState("");
  const [documentTitle, setDocumentTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (Object.keys(titles).indexOf(location.pathname) !== -1) {
      setPageTitle(titles[location.pathname].header);
      setDocumentTitle(titles[location.pathname].document);
    } else {
      setPageTitle("404 Seite existiert nicht");
      setDocumentTitle("404 Seite existiert nicht");
    }

    location.pathname === "/" || location.pathname === "/home"
      ? setShowLandingPage(true)
      : setShowLandingPage(false);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      {!showLandingPage ? <Header title={pageTitle} /> : ""}
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
        ""
      )}
    </ThemeProvider>
  );
}

export default App;
