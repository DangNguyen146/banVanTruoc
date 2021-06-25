import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ListDeckDetail from "./listDeckDetail";
import Footer from "../Footer";
import { connect } from "react-redux";
import { fetchListDecksApi } from "./modules/action";

class DetaiPageDeck extends Component {
  componentDidMount() {
    this.props.fetchListDecks();
  }
  constructor(props) {
    super(props);
    this.state = {
      page1: parseInt(this.props.match.params.id),
      page2: parseInt(this.props.match.params.id) + 1,
      page3: parseInt(this.props.match.params.id) + 2,
    };
  }
  render() {
    return (
      <>
        <div style={{ marginTop: 55 }}>
          <div className="container shadow-lg py-5" style={{ minHeight: 1110 }}>
            <h1 className="text-center">DECK</h1>
            <ListDeckDetail key="0" page={this.props.match.params.id} />
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center ">
                <li
                  className={
                    parseInt(this.props.match.params.id) === 0
                      ? "page-item disabled"
                      : "page-item"
                  }
                >
                  <NavLink
                    className="page-link text-dark "
                    to={"/deck/" + parseInt(this.props.match.params.id - 1)}
                  >
                    Previous
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink
                    className="page-link text-dark"
                    to={"/deck/" + this.state.page1}
                  >
                    {this.state.page1}
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink
                    className="page-link text-dark"
                    to={"/deck/" + this.state.page2}
                  >
                    {this.state.page2}
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink
                    className="page-link text-dark"
                    to={"/deck/" + this.state.page3}
                  >
                    {this.state.page3}
                  </NavLink>
                </li>
                <li
                  className={
                    parseInt(this.props.match.params.id) > 1
                      ? "page-item disabled"
                      : "page-item"
                  }
                >
                  <NavLink
                    className="page-link text-dark"
                    to={
                      "/deck/" +
                      parseInt(parseInt(this.props.match.params.id) + 1)
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
const mapDispatchToProps = (dispatch) => {
  return {
    fetchListDecks: () => {
      dispatch(fetchListDecksApi());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.listDecksReducer.loading,
    data: state.listDecksReducer.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetaiPageDeck);
