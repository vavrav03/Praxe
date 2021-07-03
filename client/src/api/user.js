import client from "./client";

export const postCreateChannel = (u_id, channel_name) => {
   //response: JSON '{"status": true / false (?), "reason": 0 (OK) / 1 (taken) / 2(contains forbidden expression)}'
   return client
      .getInstance()
      .post("/create_channel.php", null, { params: { u_id, channel_name } });
};

export const postCheckWhetherEmailExists = (email_address) => {
   //response: NUMBER 1 - already registered, 0 - free to use
   return client
      .getInstance()
      .post("/registration_mail_control.php", null, { params: { email_address } });
};

export const postCreateUser = (name, email, pass) => {
   return client
      .getInstance()
      .post("/create_user.php", null, { params: { name, email, pass } });
   //response: JSON '{"u_id": cislo, "status": true / false}'
};
