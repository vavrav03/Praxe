import React from "react";
import { checkVariants } from "utils";

const variants = Object.freeze({
   primary: "primary",
   secondary: "secondary",
   transparent: "transparent",
});

function Button({ variant = variants.primary, type, onClick, children, className }) {
   checkVariants(variant, variants);
   return (
      <button type={type} className={`btn ${variant} ${className}`} onClick={onClick}>
         {children}
      </button>
   );
}

export default Button;
