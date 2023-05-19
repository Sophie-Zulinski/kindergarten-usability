import { HelpOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <div className="header">
      <div className="header-img"></div>
      <div className="header-menu">
        <div className="header-spacer">&nbsp;</div>
        <h3>
          <Link to="/home"></Link>
          {title}
        </h3>
        <div className="header-spacer">&nbsp;</div>
      </div>
    </div>
  );
}

export default Header;
