import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItemCartStart } from "../../action/ShopCartAction";
import "./InfoDetailProduct.scss";
import CommonUtils from "../../utils/CommonUtils";
function InfoDetailProduct(props) {
  let { dataProduct } = props;
  let [arrDetail, setarrDetail] = useState([]);
  const [productDetail, setproductDetail] = useState([]);
  const [newPrice, setNewPrice] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const [imgPreview, setimgPreview] = useState("");
  const [activeLinkId, setactiveLinkId] = useState("");
  const [activeLinkColor, setactiveLinkColor] = useState("");
  const [quantity, setquantity] = useState("");
  const [quantityProduct, setquantityProduct] = useState(1);
  useEffect(() => {
    let { productDetail } = dataProduct ? dataProduct : [];
    if (productDetail) {
      setproductDetail(productDetail);
      setarrDetail(productDetail[0]);
      setNewPrice(
        productDetail[0].discountPrice +
          Number(productDetail[0].productDetailConfig[0].design)
      );
      setactiveLinkId(productDetail[0].productDetailConfig[0].id);
      setactiveLinkColor(productDetail[0].id);
      setquantity(productDetail[0].productDetailConfig[0].stock);

      props.sendDataFromInforDetail(productDetail[0].productDetailConfig[0]);
    }
  }, [props.dataProduct]);

  let handleSelectDetail = (event) => {
    setarrDetail(productDetail[event.target.value]);
    if (
      productDetail[event.target.value] &&
      productDetail[event.target.value].productDetailConfig.length > 0
    ) {
      setactiveLinkId(
        productDetail[event.target.value].productDetailConfig[0].id
      );
      setquantity(
        productDetail[event.target.value].productDetailConfig[0].stock
      );
      props.sendDataFromInforDetail(
        productDetail[event.target.value].productDetailConfig[0]
      );
    }
  };
  let handleClickColor = (event, index) => {
    setarrDetail(productDetail[index]);
    setactiveLinkId(productDetail[index].productDetailConfig[0].id);
    setactiveLinkColor(productDetail[index].id);
    setquantity(productDetail[index].productDetailConfig[0].stock);
    props.sendDataFromInforDetail(productDetail[index].productDetailConfig[0]);
  };
  let openPreviewImage = (url) => {
    setimgPreview(url);
    setisOpen(true);
  };
  let handleClickBoxSize = (data) => {
    setNewPrice(productDetail[0].discountPrice + Number(data.design));

    setactiveLinkId(data.id);
    setquantity(data.stock);
    props.sendDataFromInforDetail(data);
  };
  const dispatch = useDispatch();
  let handleAddShopCart = () => {
    if (props.userId) {
      dispatch(
        addItemCartStart({
          userId: props.userId,
          productdetailconfigId: activeLinkId,
          quantity: quantityProduct,
        })
      );
    } else {
      toast.error("Đăng nhập để thêm vào giỏ hàng");
    }
  };
  return (
    <div className="row s_product_inner">
      <div
        style={{
          position: "relative",
        }}
        className="col-lg-6"
      >
        <div
          style={{
            position: "unset",
          }}
          className="s_product_img"
        >
          <div
            style={{
              position: "unset",
            }}
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
              }}
            >
              <ol className="carousel-indicators">
                {arrDetail &&
                  arrDetail.productImage &&
                  arrDetail.productImage.length > 0 &&
                  arrDetail.productImage.map((item, index) => {
                    if (index === 0) {
                      return (
                        <li
                          style={{
                            border: "1px solid black",
                            height: 65,
                          }}
                          data-target="#carouselExampleIndicators"
                          data-slide-to={index}
                          className="active"
                        >
                          <img
                            height="60px"
                            className="w-100"
                            src={item.image}
                            alt=""
                          />
                        </li>
                      );
                    } else {
                      return (
                        <li
                          style={{
                            border: "1px solid black",
                            height: 65,
                          }}
                          data-target="#carouselExampleIndicators"
                          data-slide-to={index}
                          className=""
                        >
                          <img
                            height="60px"
                            className="w-100"
                            src={item.image}
                            alt=""
                          />
                        </li>
                      );
                    }
                  })}
              </ol>
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                border: "1px solid black",
                borderRadius: "15px",
                padding: "10px",
              }}
              className="carousel-inner"
            >
              {arrDetail &&
                arrDetail.productImage &&
                arrDetail.productImage.length > 0 &&
                arrDetail.productImage.map((item, index) => {
                  if (index === 0) {
                    return (
                      <div
                        onClick={() => openPreviewImage(item.image)}
                        style={{ cursor: "pointer" }}
                        className="carousel-item active"
                      >
                        <img
                          className="d-block w-100"
                          src={item.image}
                          alt="Ảnh bị lỗi"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div
                        onClick={() => openPreviewImage(item.image)}
                        style={{ cursor: "pointer" }}
                        className="carousel-item "
                      >
                        <img
                          className="d-block w-100"
                          src={item.image}
                          alt="Ảnh bị lỗi"
                        />
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="s_product_text">
          <h3>{dataProduct.name}</h3>
          <h2 style={{ color: "#71cd14" }}>
            {CommonUtils.formatter.format(newPrice)}
          </h2>
          <ul className="list">
            <li className="py-2">
              <a className="active" href="#" style={{ color: "#71cd14" }}>
                <span style={{ color: "black", fontWeight: "bold" }}>Loại</span>{" "}
                :{" "}
                {dataProduct && dataProduct.categoryData
                  ? dataProduct.categoryData.value
                  : ""}
              </a>
            </li>
            <li className="py-2">
              <a href="#" style={{ color: quantity > 0 ? "#71cd14" : "red" }}>
                {" "}
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Trạng thái
                </span>{" "}
                : {quantity > 0 ? "Còn hàng" : "Hết hàng"}
              </a>
            </li>
            <li>
              <div className="box-size mb-4">
                <a href="#">
                  {" "}
                  <span style={{ color: "black", fontWeight: "bold" }}>
                    Màu sắc
                  </span>
                </a>
                {dataProduct &&
                  productDetail &&
                  productDetail.length > 0 &&
                  productDetail.map((item, index) => {
                    return (
                      <div
                        onClick={(event) => handleClickColor(event, index)}
                        key={index}
                        className={
                          item.id === activeLinkColor
                            ? "product-size active"
                            : "product-size"
                        }
                      >
                        {item.nameDetail}
                      </div>
                    );
                  })}
              </div>
            </li>
            <li>
              {/* add them */}
              {arrDetail &&
              arrDetail.productDetailConfig &&
              arrDetail.productDetailConfig.length > 0 &&
              arrDetail.productDetailConfig[0].romData?.code === "none" ? (
                <></>
              ) : (
                <div className="box-size">
                  <a href="#">
                    {" "}
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      Bộ nhớ
                    </span>
                  </a>
                  {arrDetail &&
                    arrDetail.productDetailConfig &&
                    arrDetail.productDetailConfig.length > 0 &&
                    arrDetail.productDetailConfig.map((item, index) => {
                      return (
                        <div
                          onClick={() => handleClickBoxSize(item)}
                          key={index}
                          className={
                            item.id === activeLinkId
                              ? "product-size active"
                              : "product-size"
                          }
                        >
                          {item.romData.value}
                        </div>
                      );
                    })}
                </div>
              )}
            </li>

            <li>
              <a href="#">{quantity} sản phẩm có sẵn</a>
            </li>
          </ul>
          <p
            style={{
              marginBottom: 30,
            }}
          >
            {arrDetail.description}
          </p>
          <div style={{ display: "flex" }}>
            <div className="product_count">
              <label htmlFor="qty">Số lượng</label>
              {/* <input type="text" name="qty" id="sst" maxLength={12} defaultValue={1} title="Quantity:" className="input-text qty" /> */}
              <input
                type="number"
                value={quantityProduct}
                onChange={(event) => setquantityProduct(event.target.value)}
                min="1"
              />
            </div>
            {/* <div className="form-group">
                            <label style={{ fontSize: '14px', color: '#797979', fontFamily: '"Roboto",sans-serif', marginLeft: '16px' }} htmlFor="type">Loại sản phẩm</label>
                            <select onChange={(event) => handleSelectDetail(event)} className="sorting" name="type" style={{ outline: 'none', border: '1px solid #eee', marginLeft: '16px' }}>
                                {dataProduct && productDetail && productDetail.length > 0 &&
                                    productDetail.map((item, index) => {
                                        return (
                                            <option key={index} value={index}>{item.nameDetail}</option>
                                        )
                                    })
                                }
                            </select>
                        </div> */}
          </div>

          <div className="card_area">
            <a className="main_btn" onClick={() => handleAddShopCart()}>
              Thêm vào giỏ
            </a>
            <a className="icon_btn" href="#">
              <i className="lnr lnr lnr-heart" />
            </a>
          </div>
        </div>
      </div>
      {isOpen === true && (
        <Lightbox
          mainSrc={imgPreview}
          onCloseRequest={() => setisOpen(false)}
        />
      )}
    </div>
  );
}

export default InfoDetailProduct;
