import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Contact from "../component/contact";
import Add from "../component/add";
import Update from "../component/update";
import Delete from "../component/delete";

export default class index extends Component {
  render() {
    return (
      <div>
        <Router>

          <Switch>
            <Route  path="/" component={Contact}/>
            <Route  path="/contacts/" component={Add} />
            <Route  path="/contacts/:id" component={Update} />
            <Route  path="/contacts/:id" component={Delete}/>
          </Switch>
        </Router>
      </div>
    );
  }
}