import "./App.css";
import React, { Component } from "react";
import HomeTemplate from "./container/HomeTemplate";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routeHome } from "./router";
import BackToTop from "./components/BackToTop";

import { connect } from "react-redux";
import { USER_LOGIN_SUCCESS } from "./container/HomeTemplate/AccUser/Login/modules/constant";
import { createAction } from "./container/HomeTemplate/AccUser/Login/modules/actionforLogin";
import PageNotFound from "./container/PageNotFound";

class App extends Component {
  render() {
    const showLayoutHome = (route) => {
      if (route && route.length > 0) {
        return route.map((item, index) => {
          return (
            <HomeTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };

    return (
      <BrowserRouter>
        <Switch>
          {showLayoutHome(routeHome)}
          <Route path="" component={PageNotFound} />
        </Switch>
        <BackToTop />
      </BrowserRouter>
    );
  }
  _getLoginInLocal = () => {
    const user = localStorage.getItem("userKH");
    if (user) {
      this.props.dispatch(createAction(USER_LOGIN_SUCCESS, JSON.parse(user)));
    }
  };

  componentDidMount() {
    this._getLoginInLocal();
  }
}
export default connect()(App);
