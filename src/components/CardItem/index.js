import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    // const { movie } = this.props;
    // function CutName(name) {
    //   if (name.length > 11) name = name.slice(0, 12) + "...";
    //   return name;
    // }
    return (
      <>
        {/* <div id="listmovieitem" className="col-6 col-sm-3 col-xl-2 mb-2 px-1 ">
          <div className="card">
            <div className="listItemImg">
              <img className="card-img-top" src={movie.hinhAnh} alt="" />
            </div>
            <div className="card-body px-3">
              <p className="card-title d-none d-md-block">
                <b>{CutName(movie.tenPhim)}</b>
              </p>
              <Link
                to={`/detail/${movie.maPhim}`}
                className="btn btn-redorange btn-block  shadow-none  border-0"
                variant="contained"
                color="secondary"
              >
                Chi tiết
              </Link>
            </div>
          </div>
        </div> */}
        <div className="productitem col-6 col-sm-3 overflow-hidden">
          <div className="item-content">
            <div className="product-img align-items-center">
              <img src="./img/1.png" className="h-100" alt="" />
              <div className="item-hover text-center w-100 ">
                <div className="ms-5 mt-5 text-center item-hover-hover">
                  <div className="ms-5 mb-2 w-25 p-2 text-center border shadow item-hover-item bg-product">
                    <i className="fa fa-shopping-cart" />
                  </div>
                  <div className="ms-5 mb-2 w-25 p-2 text-center border shadow item-hover-item bg-product">
                    <i className="fa fa-search-plus" />
                  </div>
                  <div className="ms-5 mb-2 w-25 p-2 text-center border shadow item-hover-item bg-product">
                    <i className="fa fa-ice-cream" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-content text-center">
              <h5> FLOWERS SURFSKATE COMPLETE</h5>
              <p>2.900.000₫</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
