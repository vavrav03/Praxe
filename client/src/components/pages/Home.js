import Button from "components/atoms/Button";
import TextField from "components/atoms/TextField";
import React from "react";
import Card from "components/atoms/Card";
import SignPage from "components/templates/SignPage";
import { Formik, Form, FastField } from "formik";
import { useHistory } from "react-router-dom";
import * as api from "api";

function Home() {
   const history = useHistory();

   const validateChannel = (value) => {
      console.log(value);
      if (!value) {
         return "Vyžadováno";
      }
   };

   const onSubmit = (values, { setErrors }) => {
      api.postCreateChannel(12, values.channe_namel).then((response) => {
         const { status, reason } = response.data;
         if (reason === 0) {
            if (status) {
               history.push("/user_profile?first_time=true");
            } else {
               //do sth
            }
         } else if (reason === 1) {
            setErrors({
               channel_name: `Název ${values.channel_name} je již zaregistrován`,
            });
         } else if (reason === 2) {
            setErrors({
               channel_name: "Název obsahuje zakázané znaky",
            });
         }
      });
   };
   return (
      <SignPage
         id="home-page"
         isLoggedIn={true}
         rightSideText={"Jiný inspirativní kus textu o pár slovech, aby se registrovali."}
      >
         <div className="limiter-container">
            <h1 className={"load-bottom-animation-1"}>Vítejte, jméno jméno!</h1>
            <Card variant={"outlined"} className={"load-bottom-animation-2"}>
               <Formik
                  initialValues={{
                     channel_name: "",
                  }}
                  onSubmit={onSubmit}
               >
                  <Form>
                     <FastField name="channel_name" validate={validateChannel}>
                        {({ field, form, meta }) => (
                           <TextField
                              label="Název prodejního kanálu:"
                              variant={"text"}
                              formControlData={field}
                              error={meta.error}
                              touched={meta.touched}
                              placeholder={"Prodej aut"}
                           ></TextField>
                        )}
                     </FastField>
                     <p id="home-description">
                        Pod tímto názvem uvidí stránku navštěvníci serveru a kupujicí.
                        Příklad: Nikol prodává, Nábytek z Prahy, Wow bazar...
                     </p>
                     <p id="do-not-fill">
                        Pokud jste kupujicí a nechcete prodávát, tak pole nevyplňujte.
                     </p>
                     <Button type={"submit"}>Hotovo!</Button>
                  </Form>
               </Formik>
            </Card>
         </div>
      </SignPage>
   );
}

export default Home;
