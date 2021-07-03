import NavbarLinkList from "components/molecules/NavbarLinkList";
import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/img/logo.png";

function Navbar({ isLoggedIn }) {
   //todo isLoggedIn - potreba znat dalsi info
   return (
      <header className={"navbar"}>
         <div className={"navbar-brand"}>
            <img src={logo} alt={"logo"}></img>
         </div>
         <NavbarLinkList>
            <div className="nav-list-item">
               <Link className={"nav-link"} to="/">
                  domů
               </Link>
            </div>
            {isLoggedIn ? null : (
               <div className="nav-list-item">
                  <Link className={"nav-link"} to="/login">
                     <span  style={{ marginRight: "5px" }}>přihlásit se</span>
                     <i className="fas fa-arrow-right"></i>
                  </Link>
               </div>
            )}{" "}
            {/*možnost doplnění nějaké hlavičky se jménem a profilovkou přihlášeného uživatele*/}
         </NavbarLinkList>
      </header>
   );
}

export default Navbar;
