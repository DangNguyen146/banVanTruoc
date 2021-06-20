import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="mt-3 bg-dark text-light wow fadeInLeft">
        <div className="container px-3 py-4">
          <div className="row">
            <div className="col-12 mb-3 mb-md-0 col-md-4">
              <div className="row">
                <div className="col-12 col-md-4">
                  <img src="./img/LogoWhite.png" className="w-100" alt="" />
                </div>
                <div className="col-12 col-md-8">
                  <p className="m-0">
                    Nhờ sự ủng hộ mạnh mẽ từ những người có cùng đam mê khắp nơi
                    trên cả nước, chúng tôi tự hào là một trong những skateshop
                    chuyên nghiệp nhất Việt Nam ở thời điểm hiện tại.
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <div className="foter-icon">
                    <i className="fab fa-facebook-f" />
                  </div>
                  <div className="foter-icon">
                    <i className="fab fa-twitter" />
                  </div>
                  <div className="foter-icon">
                    <i className="fab fa-discord" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-3 mb-md-0 col-md-4">
              <h4>FANPAGE</h4>
            </div>
            <div className="col-12 mb-3 mb-md-0 col-md-4">
              <h4 className="mb-0">ĐỊA CHỈ CỬA HÀNG</h4>
              <p className="mb-0" style={{ fontWeight: 600 }}>
                Địa chỉ
              </p>
              <p className="mb-0">Số 1, Phường 1, Quận 1, TP. HCM</p>
              <p className="mb-0" style={{ fontWeight: 600 }}>
                Hỗ trợ &amp; Tư vấn
              </p>
              <p className="mb-0">0909063600</p>
              <p className="mb-0" style={{ fontWeight: 600 }}>
                Email
              </p>
              <p className="mb-0">abcd@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
