import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

function ReactBurgerMenu({ outerContainerId, pageWrapId }) {
  return (
    <Menu
      width={200}
      right
      pageWrapId={pageWrapId}
      outerContainerId={outerContainerId}
    >
      <Link id="home" className="menu-item" to="/home" state={"Home"}>
        Home
      </Link>
      <Link
        id="infos"
        className="menu-item"
        to="/information"
        state={"Informationen"}
      >
        Informationen
      </Link>
      <Link id="search" className="menu-item" to="/search" state={"Suche"}>
        Suche
      </Link>
    </Menu>
  );
}

export default ReactBurgerMenu;
