import React, { Component } from "react";
import "./blog.css";

export default class Blog extends Component {
  render() {
    return (
      <div style={{ marginTop: 55 }} className="blog">
        <div className="drop" style={{ padding: "175px auto" }}></div>
        <div className="wave" style={{ margin: "175px auto" }}></div>
        <h2 className="text-light text-center">BLOG</h2>
      </div>
    );
  }
}
