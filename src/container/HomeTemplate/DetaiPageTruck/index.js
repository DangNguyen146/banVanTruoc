import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ListDeckDetail from "./listDeckDetail";
import Footer from "../Footer";

export default class DetaiPageTruck extends Component {
  render() {
    return (
      <>
        <div style={{ marginTop: 55 }}>
          <div className="container shadow-lg py-5" style={{ minHeight: 1110 }}>
            <h1 className="text-center">TRUCKS</h1>
            <ListDeckDetail key="0" page={this.props.match.params.id} />
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center ">
                <li className="page-item">
                  <NavLink
                    className="page-link text-dark"
                    to={
                      "/deck/" + parseInt(this.props.match.params.id) - 1 >= 0
                        ? parseInt(this.props.match.params.id) - 1
                        : 3
                    }
                  >
                    Previous
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink className="page-link text-dark" to="/deck/0">
                    1
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink className="page-link text-dark" to="/deck/1">
                    2
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink className="page-link text-dark" to="/deck/2">
                    3
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink
                    className="page-link text-dark"
                    to={
                      "/deck/" + this.props.match.params.id + 1 <= 3
                        ? this.props.match.params.id + 1
                        : 0
                    }
                  >
                    Next
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
