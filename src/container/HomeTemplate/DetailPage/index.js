import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../Footer";
import database from "./data.json";
import { DatHangAction } from "./Modules/action";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  renderHTML = () => {
    return database.map((item, i) => {
      if (item.maVan == this.props.match.params.id) {
        return (
          <>
            <div className="col-12 col-md-4">
              <img src={item.hinhAnh} className="w-100" alt="" />
            </div>
            <div className="col-12 col-md-8 text-light">
              <div className="row">
                <div className="col-4">Tên sản phẩm: </div>
                <div className="col-8">
                  <b className="pb-0">{item.tenVan}</b>
                </div>
                <div className="col-4">Giá sản phẩm: </div>
                <div className="col-8">
                  <i className="pb-0">{item.giaVan}</i>
                </div>
                <div className="col-4">Mô tả: </div>
                <div className="col-8">
                  <i className="pb-0">{item.moTa}</i>
                </div>
                <div className="col-4">Đánh giá: </div>
                <div className="col-8">
                  <i className="pb-0 text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </i>
                </div>
                <div className="col-2">
                  <Button
                    className="w-100  p-2 text-center border shadow item-hover-item bg-product"
                    onClick={() => {
                      this.props.datVan({
                        maVan: item.maVan,
                        tenVan: item.tenVan,
                        giaVan: item.giaVan,
                        hinhAnh: item.hinhAnh,
                        moTa: item.moTa,
                        danhGia: item.danhGia,
                        soLuong: 1,
                      });
                      this.setState({
                        show: true,
                      });
                    }}
                  >
                    <i className="fa fa-shopping-cart text-light" />
                  </Button>
                </div>
                <div className="col-1 d-block d-md-none"></div>
                <div className="col-2 ">
                  <Button className="w-100 p-2 text-center border shadow item-hover-item bg-product">
                    <i className="fa fa-search-plus text-light" />
                  </Button>
                </div>
                <div className="col-1 d-block d-md-none"></div>
                <div className="col-2 ">
                  <Button className="w-100  p-2 text-center border shadow item-hover-item bg-product">
                    <i className="fa fa-ice-cream text-light" />
                  </Button>
                </div>
              </div>
            </div>
          </>
        );
      }
    });
  };
  render() {
    return (
      <>
        <div style={{ marginTop: 65 }}>
          <div className="header-detail">
            <div>
              <div className="context">
                <div className="container">
                  <div className="row">{this.renderHTML()}</div>
                </div>
              </div>
              <div className="area">
                <ul className="circles">
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <div
          className="position-fixed bottom-0 right-0 p-3"
          style={{ zIndex: 999, right: 0, bottom: 0 }}
        >
          <div
            id="liveToast"
            className={
              this.state.show === true ? "toast fade show" : "toast fade hide"
            }
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-delay={2000}
          >
            <div className="toast-header">
              <strong className="mr-auto">Black Sonia</strong>
              <small>A later</small>
              <button
                onClick={() => {
                  this.setState({
                    show: false,
                  });
                }}
                type="button"
                className="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="toast-body">Bạn vừa thêm vào giỏ hàng</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
