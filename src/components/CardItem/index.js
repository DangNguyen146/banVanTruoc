import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { DatHangAction } from "./Modules/action";
import { Toast } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class CardItem extends Component {
  render() {
    const { van } = this.props;

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
              <img src={van.hinhAnh} className="h-100" alt="" />
              <div className="item-hover text-center w-100 ">
                <div className="ms-5 mt-5 text-center item-hover-hover">
                  <Button
                    className="ms-5 mb-2 w-25 p-2 text-center border shadow item-hover-item bg-product"
                    onClick={() => {
                      const van = this.props.van;
                      this.props.datVan({
                        maVan: van.maVan,
                        tenVan: van.tenVan,
                        giaVan: van.giaVan,
                        hinhAnh: van.hinhAnh,
                        moTa: van.moTa,
                        danhGia: van.danhGia,
                        soLuong: 1,
                      });
                      this.setState({
                        show: true,
                      });
                    }}
                  >
                    <i className="fa fa-shopping-cart" />
                  </Button>
                  <div className="ms-5 mb-2 w-25 p-2 text-center border shadow item-hover-item bg-product">
                    <i className="fa fa-search-plus" />
                  </div>
                  <Button className="ms-5 mb-2 w-25 p-2 text-center border shadow item-hover-item bg-product">
                    <i className="fa fa-ice-cream" />
                  </Button>
                </div>
              </div>
            </div>
            <NavLink
              className="product-content text-center nav-link text-dark"
              to={"/detail/" + this.props.van.maVan}
            >
              <h5>{van.tenVan}</h5>
              <p>{van.giaVan}Đ</p>
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dangSachVanDangDat: state.datHangReducer.dangSachVanDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datVan: (van) => {
      dispatch(DatHangAction(van));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
