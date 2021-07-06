import React from "react";

function IconButton({ onClick, children }) {
   return (
      <div className={"icon-btn"} onClick={onClick}>
         {children}
      </div>
   );
}

export default IconButton;
