import React, { Component } from "react";

export default class SanPhamMua extends Component {
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
                <h5 className="modal-title">Modal title</h5>
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
                <p>Modal body text goes here.</p>
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
