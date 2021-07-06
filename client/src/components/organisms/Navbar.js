import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/img/logo.png";
import { checkVariants } from "utils/ComponentUtils";

const variants = {
   normal: "normal",
};

function Navbar({ variant = variants.normal, isLoggedIn }) {
   checkVariants(variant, variants);
   //todo isLoggedIn - potreba znat dalsi info
   return (
      <header className={`navbar ${variant}`}>
         <div className={"navbar-brand"}>
            <img src={logo} alt={"logo"}></img>
         </div>
         <nav className={`horizontal-list`}>
            <div className="list-item">
               <Link className={"nav-link to-underline"} to="/">
                  domů
               </Link>
            </div>
            {isLoggedIn ? null : (
               <div className="list-item">
                  <Link className={"nav-link to-underline"} to="/login">
                     <span style={{ marginRight: "5px" }}>přihlásit se</span>
                     <i className="fas fa-arrow-right"></i>
                  </Link>
               </div>
            )}{" "}
            {/*možnost doplnění nějaké hlavičky se jménem a profilovkou přihlášeného uživatele*/}
         </nav>
      </header>
   );
}

export default Navbar;
