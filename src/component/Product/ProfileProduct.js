import React from "react";

function ProfileProduct(props) {
  let data = props.data;
  console.log("123123", data);
  return (
    <div className="table-responsive">
      <table className="table">
        <tbody>
          <tr>
            <td>
              <h5>Bảo hành</h5>
            </td>
            <td>
              <h5>{data.warrantyId} tháng</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Màn hình</h5>
            </td>
            <td>
              <h5>{data.screen}</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Hệ điều hành</h5>
            </td>
            <td>
              <h5>{data.os}</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Camera sau</h5>
            </td>
            <td>
              <h5>{data.backcam}</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Camera trước</h5>
            </td>
            <td>
              <h5>{data.frontcam}</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h5>CPU</h5>
            </td>
            <td>
              <h5>{data.cpu}</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h5>RAM</h5>
            </td>
            <td>
              <h5>{data.ram}</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Sim</h5>
            </td>
            <td>
              <h5>{data.sim}</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Pin</h5>
            </td>
            <td>
              <h5>{data.battery}</h5>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProfileProduct;
