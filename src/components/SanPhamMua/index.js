import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamMua extends Component {
  renderHTML = () => {
    if (this.props.dangSachVanDangDat.length !== 0)
      return this.props.dangSachVanDangDat.map((item, index) => {
        return (
          <>
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <img className="w-100" src={item.hinhAnh} alt="" />
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-5">Tên sản phẩm: </div>
                    <div className="col-7">
                      <b className="pb-0">{item.tenVan}</b>
                    </div>
                    <div className="col-5">Giá sản phẩm: </div>
                    <div className="col-7">
                      <i className="pb-0">{item.giaVan}</i>
                    </div>
                    <div className="col-5">Số lượng sản phẩm: </div>
                    <div className="col-7">
                      <i className="pb-0">{item.soLuong}</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {index + 1 < this.props.dangSachVanDangDat.length ? (
              <div className="bg-dark w-100 my-4" style={{ height: 2 }}></div>
            ) : (
              ""
            )}
          </>
        );
      });
    else {
      return <h5>Chưa có sản phẩm nào được mua</h5>;
    }
  };
  render() {
    return (
      <>
        <div
          className="navbar navbar-expand-lg SanPhamMua"
          data-toggle="modal"
          data-target="#SanPhamMuaModal"
        >
          <div className="SanPhamMua-item">
            <i className="fa fa-shopping-cart" />
          </div>
        </div>

        <div
          className="modal fade"
          id="SanPhamMuaModal"
          tabIndex={-1}
          aria-labelledby="SanPhamMuaModal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sản phẩm đã mua</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">{this.renderHTML()}</div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
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
export default connect(mapStateToProps)(SanPhamMua);
