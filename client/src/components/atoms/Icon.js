import React from "react";
//font awesome icons
export function Icon({ className, name }) {
   return <i className={`icon fas ${name} ${className}`}></i>;
}

export function EyeIcon() {
   return <Icon name="fa-eye"></Icon>;
}

export function EyeSlashIcon() {
   return <Icon name="fa-eye-slash"></Icon>;
}

export function CheckIcon() {
   return <Icon name="fa-check"></Icon>;
}

export default Icon;
