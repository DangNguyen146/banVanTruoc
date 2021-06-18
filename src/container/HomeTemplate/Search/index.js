import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="header-search w-100 wow bounceIn">
        <form className="input-group mb-3 w-50" style={{ left: "23%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search anymore"
            aria-label="Search anymore"
            aria-describedby="basic-addon2"
          />
          <button className="input-group-text" id="basic-addon2" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
