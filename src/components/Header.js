import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header({ title }) {
  return (
    <div className="header">
      <div className="header-img"></div>
      <div className="header-menu">
        <AccountCircleIcon fontSize="medium" className="header-icon-account" />
        <h3>{title}</h3>
        <div className="header-spacer">&nbsp;</div>
      </div>
    </div>
  );
}

export default Header;
