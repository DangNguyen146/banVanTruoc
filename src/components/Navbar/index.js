import { Link } from "@material-ui/core";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import User from "./User";

export default class NavbarHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ishandel: true,
    };
  }

  render() {
    return (
      <div className="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light container-fluid shadow">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img src="./img/Logo.png" style={{ width: 50 }} alt />
            </NavLink>
            <div className=" d-flex d-lg-none">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarvanTruot"
                aria-controls="navbarvanTruot"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              style={{ flexGrow: "0" }}
              id="navbarvanTruot"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active fw-bold"
                    aria-current="page"
                    to="/"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownSKATEBOARDS"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    SKATEBOARDS
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownSKATEBOARDS"
                  >
                    <a className="dropdown-item" href="#">
                      Deck
                    </a>
                    <a className="dropdown-item" href="#">
                      Trucks
                    </a>
                    <a className="dropdown-item" href="#">
                      Wheels
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    BLOG
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownCONTACT"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    CONTACT
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownCONTACT"
                  >
                    <a className="dropdown-item" href="#">
                      Map
                    </a>
                    <a className="dropdown-item" href="#">
                      SUPPORT
                    </a>
                    <a className="dropdown-item" href="#">
                      ABOUT ME
                    </a>
                  </div>
                </li>
              </ul>

              <div className="collapse d-flex m-0 p-0">
                <User />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
