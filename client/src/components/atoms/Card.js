import React from "react";
import { checkVariants } from "utils/ComponentUtils";

const variants = {
   normal: "normal",
   outlined: "outlined",
};

function Card({ variant = variants.normal, children, className }) {
   checkVariants(variant, variants);
   return <div className={`card ${variant} ${className}`}>{children}</div>;
}

export default Card;
