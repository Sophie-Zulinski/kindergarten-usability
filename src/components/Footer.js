import { useState } from "react";
import { HelpOutline, Close, Search, InfoOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openHelp = () => {
    setIsModalOpen(true);
  };

  const openSearch = () => {
    navigate("/search");
  };

  const openInfo = () => {
    navigate("/information");
  };

  const closeHelp = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeHelp}>
          <div className="modal">
            <IconButton
              className="close-button"
              onClick={closeHelp}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
            >
              <Close />
            </IconButton>
            <h3 className="modal-title">Kurzhilfe</h3>
            <div className="modal-paragraph">
              <h4 className="modal-headline">Betreuungszeiten</h4>
              <p>H - Stundenweise</p>
              <p>VM - Vormittags</p>
              <p>NM - Nachmittags</p>
              <p>GT - Ganztags</p>
            </div>
            <div className="modal-paragraph">
              <h4 className="modal-headline">Gruppengröße</h4>
              <p>S - weniger als 5 Kinder</p>
              <p>M - bis zu 10 Kinder</p>
              <p>L - bis zu 15 Kinder</p>
              <p>XL - mehr als 15 Kinder</p>
            </div>
            <div className="modal-paragraph">
              <h4 className="modal-headline">Altersgruppen</h4>
              <p>0-2 Jahre</p>
              <p>3-4 Jahre</p>
              <p>5 Jahre</p>
            </div>
          </div>
        </div>
      )}
      <div className="footer">
        <IconButton
          onClick={openHelp}
          color="secondary"
          sx={{ marginLeft: "14px" }}
        >
          <HelpOutline />
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
    </>
  );
}

export default Footer;
