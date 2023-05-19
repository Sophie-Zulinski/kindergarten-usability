import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import {
  Search,
  InfoOutlined,
  FormatListNumberedOutlined,
} from "@mui/icons-material";

function Footer() {
  const navigate = useNavigate();

  const openSearch = () => {
    navigate("/search");
  };

  const openInfo = () => {
    navigate("/information");
  };

  return (
    <div className="footer">
      <IconButton color="secondary" sx={{ marginLeft: "14px" }}>
        <FormatListNumberedOutlined />
      </IconButton>
      <IconButton onClick={openSearch} color="secondary">
        <Search />
      </IconButton>
      <IconButton
        onClick={openInfo}
        color="secondary"
        sx={{ marginRight: "14px" }}
      >
        <InfoOutlined />
      </IconButton>
    </div>
  );
}

export default Footer;
