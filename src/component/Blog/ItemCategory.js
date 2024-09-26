import React, { useState } from "react";

function ItemCategory(props) {
  let handleClickCategory = (code) => {
    props.handleClickCategory(code);
  };
  return (
    <li>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => handleClickCategory(props.data.code)}
        class={
          props.data.code === props.activeLinkId
            ? "d-flex activeCategory"
            : "d-flex"
        }
      >
        <p>{props.data.value}</p>
        {console.log(props.data, "232323")}
        <p>({props.data.countPost})</p>
      </a>
    </li>
  );
}

export default ItemCategory;
