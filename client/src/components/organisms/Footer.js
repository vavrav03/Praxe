import React from "react";
import { checkVariants } from "utils/ComponentUtils";

const variants = {
   concise: "concise",
};

function Footer({ variant = variants.concise }) {
   checkVariants(variant, variants);
   return <footer className={`${variant}`}>© 2021 prodey.cz</footer>;
}

export default Footer;
