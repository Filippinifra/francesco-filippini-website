import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HOME_PATH, HOME_RELATIVE_PATH } from "constants/paths";
import { defaultLanguage } from "constants/languages";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path={HOME_PATH}>
          <App />
        </Route>
        <Route path="*">
          <Redirect to={HOME_RELATIVE_PATH + defaultLanguage} />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
