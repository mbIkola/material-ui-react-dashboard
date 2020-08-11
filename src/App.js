import React from 'react';
import './App.css';
import "./assets/css/material-dashboard-react.css?v=1.9.0";


// core components
import Admin from "./layouts/Admin.js";
import RTL from "./layouts/RTL.js";



import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

const hist = createBrowserHistory();

function App() {
  return (
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/rtl" component={RTL} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
  );
}

export default App;
