import React, { useState } from "react";

const variants = ["grey"];
const types = ["text", "password", "email"];
const sizes = ["fullwidth"];

function TextField({
   variant,
   size,
   type,
   label,
   formControlData,
   touched,
   error,
   placeholder,
}) {
   if (!variants.includes(variant)) {
      variant = variants[0];
   }
   if (!sizes.includes(size)) {
      size = sizes[0];
   }
   if (!types.includes(type)) {
      type = types[0];
   }
   const toggleTextVisibility = () => {
      if (currentType === "password") {
         setCurrentType("text");
      } else {
         setCurrentType("password");
      }
   };
   const [currentType, setCurrentType] = useState(type); //for toggling password visibility
   let backIcon = null;
   const checked = touched && !error;
   const shouldDisplayError = touched && error;
   if (type === "password") {
      backIcon = (
         <i
            className={`fas 
            ${currentType === "password" ? "fa-eye" : "fa-eye-slash"} 
            ${checked && "checked"} 
            password-visibility-toggler`}
            onClick={toggleTextVisibility}
         ></i>
      );
   } else if (checked) {
      backIcon = <i className={`fas fa-check checked`}></i>;
   }

   return (
      <div className={`text-field ${size}`}>
         <div className={"label"}>{label}</div>
         <div
            className={`input-wrapper ${variant} ${size} ${
               shouldDisplayError && "error"
            } ${checked && "checked"}`}
         >
            <input
               type={currentType}
               {...formControlData}
               placeholder={placeholder}
            ></input>
            {backIcon}
         </div>
         {shouldDisplayError && <div className="error-message">{error}</div>}
      </div>
   );
}

export default TextField;
