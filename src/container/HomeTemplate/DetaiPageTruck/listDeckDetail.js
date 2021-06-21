import React, { Component } from "react";
import CardItemListPage from "../../../components/CardItemListPage";
import database from "./data.json";

export default class ListDeckDetail extends Component {
  renderHTML = (page) => {
    return database.slice(page * 12, page * 10 + 12).map((item, index) => {
      return (
        <>
          <div className="col-6 col-md-3">
            <CardItemListPage key={index} van={item} />
          </div>
        </>
      );
    });
  };
  render() {
    const { page } = this.props;
    return <div className="row">{this.renderHTML(page)}</div>;
  }
}
