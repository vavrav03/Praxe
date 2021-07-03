import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import App from "components/environment/App";
import "assets/styles/index.scss";

ReactDOM.render(<App history={history} />, document.getElementById("root"));
