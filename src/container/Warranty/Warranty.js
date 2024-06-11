import React from "react";
import { useState } from "react";
import { getWarranty } from "../../services/userService";
import "react-image-lightbox/style.css";
import "./Warranty.css";
import { Link } from "react-router-dom";

const Warranty = () => {
  const [seriNumber, setSeriNumber] = useState("");

  const [dataWarranty, setDataWarranty] = useState();

  const handleOnChange = async (keyword) => {
    setSeriNumber(keyword);
  };

  const handleSearchProduct = async () => {
    let data = await getWarranty(seriNumber);
    if (data && data.errCode === 0) {
      setDataWarranty(data);
    }

    if (data && data.errCode === -1) {
      setDataWarranty(data);
    }
  };

  return (
    <>
      <section
        style={{
          minHeight: 120,
        }}
        class="banner_area"
      >
        <div
          style={{
            minHeight: 120,
          }}
          class="banner_inner d-flex align-items-center"
        >
          <div class="container">
            <div class="banner_content d-md-flex justify-content-between align-items-center">
              <div class="mb-3 mb-md-0">
                <h2>Bảo hành</h2>
                <p>Kiểm tra phạm vi bảo hành thiết bị của bạn</p>
              </div>
              <div class="page_link">
                <Link to={"/"}>Trang chủ</Link>
                <Link to={"/check-warranty"}>Bảo hành</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid p-4">
        <h1 className="text-center mt-4">Nhập mã seri sản phẩm của bạn</h1>
        <div className="d-flex justify-content-center mt-4">
          <div className="mt-2  mr-2">
            <input
              id="seriNumber"
              name="seriNumber"
              style={{ minWidth: "300px", height: "45px" }}
              onChange={(event) => handleOnChange(event.target.value)}
              type="text"
              required
            />
          </div>
          <div className="ml-2">
            <button
              onClick={() => handleSearchProduct()}
              className="button-3 mt-2"
              role="button"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
        {dataWarranty && dataWarranty.errCode === 0 ? (
          <>
            <div className="d-flex mt-5 p-5 justify-content-center align-items-center">
              <div className="product-img">
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={dataWarranty?.image}
                  alt=""
                />
              </div>
              <div className="mt-4" style={{ textAlign: "left" }}>
                <p style={{ fontSize: "22px" }}>{dataWarranty?.nameProdudct}</p>
                <p style={{ fontSize: "22px" }}>{dataWarranty?.messBuyDate}</p>
                <p style={{ fontSize: "22px" }}>{dataWarranty?.serialNumber}</p>
                <br />
                <p>
                  {" "}
                  {/* Thêm color: "#fff" */}
                  <u style={{ fontSize: "26px", color: "#0091ea" }}>
                    {dataWarranty?.messWarranty}
                  </u>
                </p>
              </div>
            </div>
            <br />
            <br />
          </>
        ) : (
          <></>
        )}

        {dataWarranty && dataWarranty.errCode === -1 ? (
          <div className="d-flex justify-content-center mt-5 p-5 ">
            <p style={{ fontSize: "22px", color: "#0091ea" }}>
              Không tìm thấy thông tin bảo hành!
            </p>
          </div>
        ) : (
          <></>
        )}

        <div style={{ height: "300px" }}></div>
      </div>
    </>
  );
};
export default Warranty;
