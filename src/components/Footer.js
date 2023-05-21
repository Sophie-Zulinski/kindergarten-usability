import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import {
  Pageview,
  PageviewOutlined,
  InfoOutlined,
  Info,
  FeaturedPlayList,
  FeaturedPlayListOutlined,
} from "@mui/icons-material";

function Footer({ route }) {
  const navigate = useNavigate();

  const openSearch = () => {
    navigate("/search");
  };

  const openInfo = () => {
    navigate("/information");
  };

  const handleClickResultsList = () => {
    navigate("/results", {
      state: {
        kiga: {},
        searchParams: {
          district: "",
          allOpeningHours: [],
          allGroupSizes: [],
          allAgeGroups: [],
          publicOrPrivate: "",
        },
      },
    });
  };

  return (
    <div className="footer">
      <div className="footer-menu footer-menu-left col center-vertical">
        <IconButton
          onClick={handleClickResultsList}
          color="secondary"
          sx={{ padding: "0 0 5px 0" }}
        >
          {route === "results" ? (
            <FeaturedPlayList />
          ) : (
            <FeaturedPlayListOutlined />
          )}
        </IconButton>
        <p>Übersicht</p>
      </div>

      <div className="footer-menu col center-vertical">
        <IconButton
          onClick={openSearch}
          color="secondary"
          sx={{ padding: "0 0 5px 0" }}
        >
          {route === "search" ? <Pageview /> : <PageviewOutlined />}
        </IconButton>
        <p>Suche</p>
      </div>

      <div className="footer-menu footer-menu-right col center-vertical">
        <IconButton
          onClick={openInfo}
          color="secondary"
          sx={{ padding: "0 0 5px 0" }}
        >
          {route === "information" ? <Info /> : <InfoOutlined />}
        </IconButton>
        <p>Infos</p>
      </div>
    </div>
  );
}

export default Footer;
