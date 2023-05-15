import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, useLocation } from "react-router-dom";
import Menu from "./components/Menu";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import InformationPage from "./pages/InformationPage";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import { useEffect, useState } from "react";

const titles = {
  "/": {
    header: "Home",
    document: "Kindergartenwahl",
  },
  "/home": {
    header: "Home",
    document: "Kindergartenwahl",
  },
  "/information": {
    header: "Informationen",
    document: "Kindergartenwahl: Informationen",
  },
  "/search": {
    header: "Suche",
    document: "Kindergartenwahl: Suche",
  },
};

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [pageTitle, setPageTitle] = useState("404 Not found");
  const [documentTitle, setDocumentTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (Object.keys(titles).indexOf(location.pathname) !== -1) {
      setPageTitle(titles[location.pathname].header);
      setDocumentTitle(titles[location.pathname].document);
    } else {
      setPageTitle("404 Not found");
      document.title = "404 Not found";
    }

    location.pathname === "/" || location.pathname === "/home"
      ? setShowLandingPage(true)
      : setShowLandingPage(false);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <div id="outer-container">
        {!showLandingPage ? (
          <>
            <Menu
              outerContainerId={"outer-container"}
              pageWrapId={"page-wrap"}
            />
            <Header title={pageTitle} />
          </>
        ) : (
          ""
        )}
        <div id="page-wrap">
          <Routes>
            <Route path="/" element={<HomePage title={documentTitle} />} />
            <Route path="/home" element={<HomePage title={documentTitle} />} />
            <Route
              path="/information"
              element={<InformationPage title={documentTitle} />}
            />
            <Route
              path="/search"
              element={<SearchPage title={documentTitle} />}
            />
            <Route path="*" element={<ErrorPage title="404 Not found" />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
