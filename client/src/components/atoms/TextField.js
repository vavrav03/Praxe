import React, { useState } from "react";
import { checkVariants } from "utils/ComponentUtils";
import { CheckIcon, EyeIcon, EyeSlashIcon } from "./Icon";
import IconButton from "./IconButton";

//can be added other than allowedInputTypes ("password-stretch, ...")
const variants = Object.freeze({
   text: "text",
   password: "password",
   email: "email",
});

//HTML types
const allowedInputTypes = Object.freeze({
   text: "text",
   password: "password",
   email: "email",
});

function TextFieldTemplate({
   variant,
   inputType,
   label,
   errorToDisplay,
   checked,
   formControlData,
   backIcon,
   placeholder,
}) {
   return (
      <div
         className={`text-field ${variant} ${errorToDisplay && "error"} ${
            checked && "checked"
         }`}
      >
         <div className={"label"}>{label}</div>
         <div className={`input-wrapper`}>
            <input
               type={inputType}
               {...formControlData}
               placeholder={placeholder}
            ></input>
            {backIcon}
         </div>
         <div className={`error-message-wrapper`}>
            {errorToDisplay}
         </div>
      </div>
   );
}

function PasswordTextField(props) {
   const [currentInputType, setCurrentInputType] = useState(allowedInputTypes.password); //for toggling password visibility
   const toggleTextVisibility = () => {
      if (currentInputType === allowedInputTypes.password) {
         setCurrentInputType(allowedInputTypes.text);
      } else {
         setCurrentInputType(allowedInputTypes.password);
      }
   };

   return (
      <TextFieldTemplate
         {...props}
         inputType={currentInputType}
         backIcon={
            <IconButton onClick={toggleTextVisibility}>
               {currentInputType === allowedInputTypes.password ? (
                  <EyeIcon />
               ) : (
                  <EyeSlashIcon />
               )}
            </IconButton>
         }
      ></TextFieldTemplate>
   );
}

function TextField(props) {
   const { variant, touched, error } = props;
   const errorToDisplay = touched && error ? error : null;
   const checked = touched && !error;
   checkVariants(variant, variants);
   switch (variant) {
      case variants.password:
         return (
            <PasswordTextField
               {...props}
               checked={checked}
               errorToDisplay={errorToDisplay}
            ></PasswordTextField>
         );
      default:
         return (
            <TextFieldTemplate
               {...props}
               checked={checked}
               errorToDisplay={errorToDisplay}
               inputType={variants[variant]}
               backIcon={checked && <CheckIcon />}
            ></TextFieldTemplate>
         );
   }
}

// function TextFieldTemplate1({
//    variant,
//    label,
//    formControlData,
//    touched,
//    error,
//    placeholder,
// }) {
//    checkVariants(variant, variants);

//    let backIcon = null;
//    const shouldDisplayError = touched && error;
//    if (variants[variant].inputType === allowedInputTypes.password) {
//       backIcon = (
//          <i
//             className={`fas
//             ${currentInputType === "password" ? "fa-eye" : "fa-eye-slash"}
//             ${checked && "checked"}
//             password-visibility-toggler`}
//             onClick={toggleTextVisibility}
//          ></i>
//       );
//    } else if (checked) {
//       backIcon = <i className={`fas fa-check checked`}></i>;
//    }

//    return (
//       <div className={`text-field ${size}`}>
//          <div className={"label"}>{label}</div>
//          <div
//             className={`input-wrapper ${variant} ${size} ${
//                shouldDisplayError && "error"
//             } ${checked && "checked"}`}
//          >
//             <input
//                type={currentInputType}
//                {...formControlData}
//                placeholder={placeholder}
//             ></input>
//             {backIcon}
//          </div>
//          {shouldDisplayError && <div className="error-message">{error}</div>}
//       </div>
//    );
// }

export default TextField;
