import routes from "routes";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App({ history }) {
   return (
      <BrowserRouter history={history}>
         <Switch>
            {Object.keys(routes).map((routeName) => {
               const route = routes[routeName];
               return (
                  <Route
                     component={route.component}
                     exact={route.exact}
                     path={route.path}
                  ></Route>
               );
            })}
            {/*<Route component={NotFound} />*/}
         </Switch>
      </BrowserRouter>
   );
}

export default App;
