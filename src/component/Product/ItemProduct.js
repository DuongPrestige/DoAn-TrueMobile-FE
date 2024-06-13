import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemCartStart } from "../../action/ShopCartAction";
import CommonUtils from "../../utils/CommonUtils";
import "./ItemProduct.scss";
// độ phân giải ảnh có thể làm vỡ layout
function ItemProduct(props) {
  return (
    <div
      style={{
        background: "white",
        margin: "20px 0",
        borderRadius: "8px",
        boxShadow: "0px 1px 8px rgb(0 0 0 / 10%)",
        maxWidth: "260px",
      }}
    >
      <div
        style={{ cursor: "pointer", marginBottom: "25px" }}
        className="single-product"
      >
        <Link to={`/detail-product/${props.id}`}>
          <div
            style={{ width: props.width, height: props.height }}
            className="product-img"
          >
            <img
              style={{ borderRadius: "8px" }}
              className="img-fluid w-100 img-custom"
              src={props.img}
              alt=""
            />
            <div className="p_icon">
              <a>
                <i className="ti-eye" />
              </a>
              <a>
                <i className="ti-shopping-cart" />
              </a>
            </div>
          </div>
          <div
            style={{ width: props.width, height: "99px", border: "none" }}
            className="product-btm"
          >
            <a className="d-block">
              <p style={{ fontSize: 21, color: "black" }}>{props.name}</p>
            </a>
            <div className="mt-3">
              <span className="mr-4" style={{ color: "#71cd14", fontSize: 18 }}>
                {CommonUtils.formatter.format(props.discountPrice)}
              </span>
              <del>{CommonUtils.formatter.format(props.price)}</del>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ItemProduct;
