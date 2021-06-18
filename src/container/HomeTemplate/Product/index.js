import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <>
        <section className="intro mt-4 wow fadeInRight">
          <div className="container">
            <h2 className="text-center mb-0" style={{ fontSize: "3rem" }}>
              PRODUCT
            </h2>
            <div className="row">
              <div className="col-6 col-md-4 mb-2">
                <img src="./img/banner-1.png" className="w-100" alt />
              </div>
              <div className="col-6 col-md-4 mb-2">
                <img src="./img/banner-2.png" className="w-100" alt />
              </div>
              <div className="d-block d-md-none col-3" />
              <div className="col-6 col-md-4 mb-2">
                <img src="./img/banner-3.png" className="w-100" alt />
              </div>
            </div>
          </div>
        </section>
        <section className="wow fadeInLeft">
          <div className="container cover">
            <img src="./img/banner.png" className="w-100" alt />
          </div>
        </section>
      </>
    );
  }
}
