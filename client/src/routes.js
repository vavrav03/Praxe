import Home from "components/pages/Home";
import Login from "components/pages/Login";
import Register from "components/pages/Register";

class Route {
   constructor(path, component, exact) {
      this.path = path;
      this.component = component;
      this.exact = exact;
   }
}

const routes = {
   home: new Route("/", Home, true),
   login: new Route("/login", Login, false),
   register: new Route("/register", Register, false),
};

export default routes;
