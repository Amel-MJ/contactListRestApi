import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Contact from "../component/contact";
import Add from "../component/add";
import Update from "../component/update";
import Delete from "../component/delete";
import Home from "../component/home";

export default class index extends Component {
  render() {
    return (
      <div>
        <Router>

          <Switch>
            <Route  path="/" component={Home} />
            <Route  path="/AddContacts" component={Add} />
            <Route  path="/Contacts/:id" component={Update} />
            <Route  path="/Contacts/:id" component={Delete}/>
            <Route  path="/Contacts" component={Contact}/>
          </Switch>
        </Router>
      </div>
    );
  }
}