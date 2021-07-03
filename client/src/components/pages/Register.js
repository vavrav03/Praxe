import React from "react";
import Button from "components/atoms/Button";
import Card from "components/atoms/Card";
import TextField from "components/atoms/TextField";
import SignPage from "components/templates/SignPage";
import { Formik, Form, FastField } from "formik";
import { useHistory } from "react-router-dom";
import validator from "validator";
import * as api from "api";
import routes from "routes";

function Register() {
   const history = useHistory();

   const validateName = (value) => {
      if (!value) {
         return "Vyžadováno";
      }
   };

   let emailTimer;

   const validateEmail = async (value) => {
      clearTimeout(emailTimer);
      if (!value) {
         return "Vyžadováno";
      }
      if (!validator.isEmail(value)) {
         return "Špatný formát";
      }
      const response = await new Promise((resolve) => {
         emailTimer = setTimeout(async () => {
            const response = await api.postCheckWhetherEmailExists("email");
            resolve(response.data);
         }, 200);
      });
      console.log(response);
      const exists = response === 1;
      if (exists) {
         return `Email ${value} je zaregistrován`;
      }
   };

   const validatePassword = (value) => {
      if (!value) {
         return "Vyžadováno";
      }
      if (value.length < 8) {
         return "Alespoň 8 znaků";
      }
      if (!/\d/.test(value)) {
         return "Alespoň 1 číslice";
      }
      if (!/[A-Z]/.test(value)) {
         return "Alespoň 1 velké písmeno";
      }
   };

   const onSubmit = (data) => {
      const { name, email, password } = data;
      api.postCreateUser(name, email, password).then((response) => {
         console.log(response);
         history.push(routes.home.path);
      });
      // history.push(routes.home.path); //Až bude hotový redux, tak by se push dal sem a dokud budou fetchována data, tak se někde bude točit nějaký spinner
   };

   return (
      <SignPage
         id="register-page"
         isLoggedIn={false}
         rightSideText={"Inspirativní kus textu o pár slovech, aby se registrovali."}
      >
         <div className="limiter-container">
            <h1>Registrace</h1>
            <Card>
               <Formik
                  initialValues={{
                     name: "",
                     email: "",
                     password: "",
                  }}
                  onSubmit={onSubmit}
               >
                  <Form>
                     <FastField name="name" validate={validateName}>
                        {({ field, form, meta }) => (
                           <TextField
                              label="Jméno a příjmení:"
                              formControlData={field}
                              error={meta.error}
                              touched={meta.touched}
                              placeholder={"Jan Novák"}
                           ></TextField>
                        )}
                     </FastField>
                     <FastField name="email" validate={validateEmail}>
                        {({ field, form, meta }) => (
                           <TextField
                              label="Email:"
                              type={"email"}
                              formControlData={field}
                              error={meta.error}
                              touched={meta.touched}
                              placeholder={"jan.novak@gmail.com"}
                           ></TextField>
                        )}
                     </FastField>
                     <FastField name="password" validate={validatePassword}>
                        {({ field, form, meta }) => (
                           <TextField
                              type={"password"}
                              label="Heslo:"
                              formControlData={field}
                              error={meta.error}
                              placeholder={"min: 8 letters, 1 digit, 1 uppercase"}
                              touched={meta.touched}
                           ></TextField>
                        )}
                     </FastField>
                     <Button type={"submit"}>Pokračovat</Button>
                  </Form>
               </Formik>
               <p>
                  Kliknutím na tlačítko “pokračovat” souhlasíte s obchodními podmínkami a
                  ochranou osobních údajů.
               </p>
            </Card>
            <Button
               variant="transparent"
               size="stretch"
               onClick={() => {
                  history.push(routes.login.path);
               }}
            >
               <span style={{ marginRight: "5px" }}>Již máte účet? Přihlaste se </span>
               <i className="fas fa-arrow-right"></i>
            </Button>
         </div>
      </SignPage>
   );
}

export default Register;
