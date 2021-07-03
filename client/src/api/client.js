import * as axios from "axios";

class Client {
   constructor(apiUrl) {
      this.apiUrl = apiUrl;
      this.axiosInstance = axios.create({
         baseURL: this.apiUrl,
         timeout: 31000,
      });
   }

   getInstance() {
      return this.axiosInstance;
   }
}

const client = new Client(`${window.location.origin}/assets/scripts_php`);
export default client;
