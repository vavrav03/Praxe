import Footer from "components/organisms/Footer";
import Navbar from "components/organisms/Navbar";
import React from "react";

function SignPage({ isLoggedIn, children, id, rightSideText }) {
   return (
      <div id={id} className={"sign-page"}>
         <div className="left-side">
            <Navbar isLoggedIn={isLoggedIn}></Navbar>
            <main >{children}</main>
            <Footer></Footer>
         </div>
         <div className="right-side"><h2>{rightSideText}</h2></div>
      </div>
   );
}

export default SignPage;
