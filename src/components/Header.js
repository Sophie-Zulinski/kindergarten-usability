import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <div className="header">
      <div className="header-img"></div>
      <div className="header-menu">
        <div className="header-spacer">&nbsp;</div>
        <h3>
          <Link to="/search">{title}</Link>
        </h3>
        <div className="header-spacer">&nbsp;</div>
      </div>
    </div>
  );
}

export default Header;
