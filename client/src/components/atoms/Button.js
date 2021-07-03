import React from "react";

const variants = ["primary", "secondary", "transparent"];
const sizes = ["normal", "stretch"];

function Button({ variant, size, type, onClick, children }) {
   if(!variants.includes(variant)){
      variant = variants[0];
   }
   if(!sizes.includes(size)){
      size = sizes[0];
   }
   return (
      <button type={type} className={`btn ${variant} ${size}`} onClick={onClick}>
         {children}
      </button>
   );
}

export default Button;
