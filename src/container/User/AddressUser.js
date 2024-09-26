import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getAllAddressUserByUserIdService,
  createNewAddressUserrService,
  deleteAddressUserService,
  editAddressUserService,
} from "../../services/userService";
import AddressUsersModal from "../ShopCart/AdressUserModal";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";
import "./AddressUser.scss";
function AddressUser(props) {
  const [dataAddressUser, setdataAddressUser] = useState([]);
  const [addressUserId, setaddressUserId] = useState("");
  const [isOpenModalAddressUser, setisOpenModalAddressUser] = useState(false);
  useEffect(() => {
    let userId = props.id;
    if (userId) {
      let fetchDataAddress = async () => {
        let res = await getAllAddressUserByUserIdService(userId);
        if (res && res.errCode === 0) {
          setdataAddressUser(res.data);
        }
      };
      fetchDataAddress();
    }
  }, []);
  let sendDataFromModalAddress = async (data) => {
    setisOpenModalAddressUser(false);
    setaddressUserId("");
    if (data.isActionUpdate === false) {
      let res = await createNewAddressUserrService({
        shipName: data.shipName,
        shipAdress: data.shipAdress,
        shipEmail: data.shipEmail,
        shipPhonenumber: data.shipPhonenumber,
        userId: props.id,
      });
      if (res && res.errCode === 0) {
        toast.success("Thêm địa chỉ thành công !");
        let res = await getAllAddressUserByUserIdService(props.id);
        if (res && res.errCode === 0) {
          setdataAddressUser(res.data);
        }
      } else {
        toast.error(res.errMessage);
      }
    } else {
      let res = await editAddressUserService({
        id: data.id,
        shipName: data.shipName,
        shipAdress: data.shipAdress,
        shipEmail: data.shipEmail,
        shipPhonenumber: data.shipPhonenumber,
        userId: props.id,
      });
      if (res && res.errCode === 0) {
        toast.success("Cập nhật địa chỉ thành công !");
        let res = await getAllAddressUserByUserIdService(props.id);
        if (res && res.errCode === 0) {
          setdataAddressUser(res.data);
        }
      } else {
        toast.error(res.errMessage);
      }
    }
  };
  let closeModaAddressUser = () => {
    setisOpenModalAddressUser(false);
    setaddressUserId("");
  };
  let handleOpenAddressUserModal = async () => {
    setisOpenModalAddressUser(true);
  };
  let handleDeleteAddress = async (id) => {
    let res = await deleteAddressUserService({
      data: {
        id: id,
      },
    });
    if (res && res.errCode === 0) {
      toast.success("Xóa địa chỉ user thành công");
      let res = await getAllAddressUserByUserIdService(props.id);
      if (res && res.errCode === 0) {
        setdataAddressUser(res.data);
      }
    } else {
      toast.error("Xóa địa chỉ user thất bại");
    }
  };
  let handleEditAddress = (id) => {
    setaddressUserId(id);
    setisOpenModalAddressUser(true);
  };
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-12 border-right border-left">
          <div className="box-heading">
            <div className="content-left">
              <span style={{ fontWeight: 'bold', color: 'black' }}>Địa chỉ của tôi</span>
            </div>
            <div className="content-right">
              <div
                onClick={() => handleOpenAddressUserModal()}
                className="wrap-add-address"
              >
                <i className="fas fa-plus"></i>
                <span>Thêm địa chỉ mới</span>
              </div>
            </div>
          </div>
          {dataAddressUser &&
            dataAddressUser.length > 0 &&
            dataAddressUser.map((item, index) => {
              return (
                <div key={index} className="box-address-user">
                  <div className="content-left">
                    <div className="box-label">
                      <div className="label">
                        <div style={{ fontWeight: 'bold', color: 'black' }}>Họ Và Tên:</div>
                        <div style={{ fontWeight: 'bold', color: 'black' }}>Số Điện Thoại:</div>
                        <div style={{ fontWeight: 'bold', color: 'black' }}>Địa Chỉ:</div>
                      </div>
                      <div className="content">
                        <div>{item.shipName}</div>
                        <div>{item.shipPhonenumber}</div>
                        <div>{item.shipAdress}</div>
                      </div>
                    </div>
                  </div>
                  <div className="content-right">
                    <button
                      onClick={() => handleEditAddress(item.id)}
                      style={{
                        textDecoration: 'underline',
                        color: 'white',                  // Changed to white for better visibility
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: '8px',             // Rounded corners
                        backgroundColor: '#007BFF',      // Bootstrap primary button color
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Adds shadow for depth
                        outline: 'none'                  // Removes outline
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}  // Darker on hover
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}    // Back to normal
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDeleteAddress(item.id)}
                      style={{
                        textDecoration: 'underline',
                        color: 'white',
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: '8px',
                        backgroundColor: '#DC3545',      // Bootstrap danger button color
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        outline: 'none',
                        marginLeft: 30
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c82333'}  // Darker on hover
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#DC3545'}    // Back to normal
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <AddressUsersModal
        addressUserId={addressUserId}
        sendDataFromModalAddress={sendDataFromModalAddress}
        isOpenModal={isOpenModalAddressUser}
        closeModaAddressUser={closeModaAddressUser}
      />
    </div>
  );
}

export default AddressUser;
