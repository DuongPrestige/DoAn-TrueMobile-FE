import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailProductByIdService } from "../../services/userService";
import InfoDetailProduct from "../../component/Product/InfoDetailProduct";
import ProfileProduct from "../../component/Product/ProfileProduct";
import ReviewProduct from "../../component/Product/ReviewProduct";
import DescriptionProduct from "../../component/Product/DescriptionProduct";
// import NewProductFeature from "../../component/HomeFeature/NewProductFeature"
import ProductFeature from "../../component/HomeFeature/ProductFeature";
function DetailProductPage(props) {
  const [dataProduct, setDataProduct] = useState({});
  const [dataDetailSize, setdataDetailSize] = useState({});
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUser(userData);
    }

    window.scrollTo(0, 0);

    fetchDetailProduct();
  }, []);
  let sendDataFromInforDetail = (data) => {
    setdataDetailSize(data);
  };
  let fetchDetailProduct = async () => {
    let res = await getDetailProductByIdService(id);
    if (res && res.errCode === 0) {
      setDataProduct(res.data);
    }
  };

  return (
    <div>
      <section
        style={{
          minHeight: 110,
        }}
        className="banner_area"
      >
        <div
          style={{
            minHeight: 110,
          }}
          className="banner_inner d-flex align-items-center"
        >
          <div className="container">
            <div className="banner_content d-md-flex justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h2>Chi tiết sản phẩm</h2>
                <p>Thông số chi tiết về sản phẩm</p>
              </div>
              <div className="page_link">
                <Link to={"/"}>Trang chủ</Link>
                <Link to={"/shop"}>Cửa hàng</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          paddingTop: 10,
        }}
        className="product_image_area"
      >
        <div className="container">
          <InfoDetailProduct
            userId={user && user.id ? user.id : ""}
            dataProduct={dataProduct}
            sendDataFromInforDetail={sendDataFromInforDetail}
          >
            {" "}
          </InfoDetailProduct>
        </div>
      </div>
      <section className="product_description_area">
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {dataDetailSize?.id && dataDetailSize?.romData?.code === "none" ? (
              <></>
            ) : (
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Thông số kỹ thuật
                </a>
              </li>
            )}
            <li className="nav-item">
              <a
                className={
                  dataDetailSize?.id && dataDetailSize?.romData?.code === "none"
                    ? "nav-link active"
                    : "nav-link"
                }
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Mô tả chi tiết
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                id="review-tab"
                data-toggle="tab"
                href="#review"
                role="tab"
                aria-controls="review"
                aria-selected="false"
              >
                Đánh giá
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            {dataDetailSize?.id && dataDetailSize?.romData?.code !== "none" && (
              <div
                className="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <ProfileProduct data={dataDetailSize} />
              </div>
            )}
            <div
              className={
                dataDetailSize?.id && dataDetailSize?.romData?.code === "none"
                  ? "tab-pane fade show active"
                  : "tab-pane fade"
              }
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <DescriptionProduct data={dataProduct.contentHTML} />
            </div>

            <div
              className="tab-pane fade"
              id="review"
              role="tabpanel"
              aria-labelledby="review-tab"
            >
              <ReviewProduct />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailProductPage;
