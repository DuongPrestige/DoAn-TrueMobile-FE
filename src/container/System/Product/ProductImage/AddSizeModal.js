import React from "react";
import { useEffect, useState } from "react";
import CommonUtils from "../../../../utils/CommonUtils";
import moment from "moment";
import { toast } from "react-toastify";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useFetchAllcode } from "../../../customize/fetch";
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from "reactstrap";
import { getProductDetailSizeByIdService } from "../../../../services/userService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";

const AddSizeModal = (props) => {
  const { data: dataRom } = useFetchAllcode("ROM");
  //   const { data: dataColor } = useFetchAllcode("COLOR");
  //them mới
  const { data: dataWarranty } = useFetchAllcode("WARRANTY");
  const [inputValues, setInputValues] = useState({
    // colorId: "",
    romId: "",
    warrantyId: "",
    screen: "",
    os: "",
    isActionUpdate: false,
    id: "",
    backcam: "",
    frontcam: "",
    cpu: "",
    ram: "",
    sim: "",
    battery: "",
    design: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  if (dataRom && dataRom.length > 0 && inputValues.romId === "") {
    setInputValues({ ...inputValues, ["romId"]: dataRom[0].code });
  }
  //   if (dataColor && dataColor.length > 0 && inputValues.colorId === "") {
  //     setInputValues({ ...inputValues, ["colorId"]: dataColor[0].code });
  //   }
  // thêm mới
  if (
    dataWarranty &&
    dataWarranty.length > 0 &&
    inputValues.warrantyId === ""
  ) {
    setInputValues({ ...inputValues, ["warrantyId"]: dataWarranty[0].code });
  }

  useEffect(() => {
    let id = props.productSizeId;

    if (id) {
      let fetchDetailProductSize = async () => {
        let res = await getProductDetailSizeByIdService(id);
        if (res && res.errCode === 0) {
          setInputValues({
            ...inputValues,
            ["isActionUpdate"]: true,
            ["romId"]: res.data.romId,
            ["warrantyId"]: res.data.warrantyId,
            ["screen"]: res.data.screen,
            ["os"]: res.data.os,
            ["backcam"]: res.data.backcam,
            ["frontcam"]: res.data.frontcam,
            ["ram"]: res.data.ram,
            ["cpu"]: res.data.cpu,
            ["sim"]: res.data.sim,
            ["design"]: res.data.design,
            ["battery"]: res.data.battery,
          });
        }
      };
      fetchDetailProductSize();
    }
  }, [props.isOpenModal]);

  let handleSaveInfor = () => {
    props.sendDataFromModalSize({
      romId: inputValues.romId,
      //   colorId: inputValues.colorId,
      warrantyId: inputValues.warrantyId,
      screen: inputValues.screen,
      os: inputValues.os,
      isActionUpdate: inputValues.isActionUpdate,
      id: props.productSizeId,
      backcam: inputValues.backcam,
      frontcam: inputValues.frontcam,
      cpu: inputValues.cpu,
      ram: inputValues.ram,
      sim: inputValues.sim,
      battery: inputValues.battery,
      design: inputValues.design,
    });
    setInputValues({
      ...inputValues,
      ["colorId"]: "",
      ["romId"]: "",
      ["warrantyId"]: "",
      ["screen"]: "",
      ["os"]: "",
      ["backcam"]: "",
      ["frontcam"]: "",
      ["cpu"]: "",
      ["ram"]: "",
      ["sim"]: "",
      ["battery"]: "",
      ["isActionUpdate"]: false,
    });
  };
  let handleCloseModal = () => {
    props.closeModal();
    setInputValues({
      ...inputValues,
      ["colorId"]: "",
      ["romId"]: "",
      ["warrantyId"]: "",
      ["screen"]: "",
      ["os"]: "",
      ["backcam"]: "",
      ["frontcam"]: "",
      ["cpu"]: "",
      ["ram"]: "",
      ["sim"]: "",
      ["battery"]: "",
      ["design"]: "",
      ["isActionUpdate"]: false,
    });
  };
  return (
    <div className="">
      <Modal
        isOpen={props.isOpenModal}
        className={"booking-modal-container"}
        size="md"
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title">Thêm kích thước chi tiết sản phẩm</h5>
          <button
            onClick={handleCloseModal}
            type="button"
            className="btn btn-time"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <ModalBody>
          <div className="row">
            {/* <div className="col-12 form-group">
              <label>Màu sắc</label>

              <select
                value={inputValues.colorId}
                name="colorId"
                onChange={(event) => handleOnChange(event)}
                id="inputState"
                className="form-control"
              >
                {dataColor &&
                  dataColor.length > 0 &&
                  dataColor.map((item, index) => {
                    return (
                      <option key={index} value={item.code}>
                        {item.value}
                      </option>
                    );
                  })}
              </select>
            </div> */}
            <div className="col-12 form-group">
              <label>Bộ nhớ</label>

              <select
                value={inputValues.romId}
                name="romId"
                onChange={(event) => handleOnChange(event)}
                id="inputState"
                className="form-control"
              >
                {dataRom &&
                  dataRom.length > 0 &&
                  dataRom.map((item, index) => {
                    return (
                      <option key={index} value={item.code}>
                        {item.value}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="col-12 form-group">
              <label>Thời gian bảo hành</label>
              {/* //check lại */}
              <select
                value={inputValues.warrantyId}
                name="warrantyId"
                onChange={(event) => handleOnChange(event)}
                id="inputState"
                className="form-control"
              >
                {dataWarranty &&
                  dataWarranty.length > 0 &&
                  dataWarranty.map((item, index) => {
                    return (
                      <option key={index} value={item.code}>
                        {item.value}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="col-12 form-group">
              <label>Giá tiền thêm</label>
              <input
                value={inputValues.design}
                name="design"
                onChange={(event) => handleOnChange(event)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-12 form-group">
              <label>Màn hình</label>
              <input
                value={inputValues.screen}
                name="screen"
                onChange={(event) => handleOnChange(event)}
                type="text"
                className="form-control"
              />

              {/* <select value={inputValues.romId} name="romId" onChange={(event) => handleOnChange(event)} id="inputState" className="form-control">
                                {dataRom && dataRom.length > 0 &&
                                    dataRom.map((item, index) => {
                                        return (
                                            <option key={index} value={item.code}>{item.value}</option>
                                        )
                                    })
                                }
                            </select> */}
            </div>
            <div className="col-12 form-group">
              <label>Hệ điều hành</label>
              <input
                value={inputValues.os}
                name="os"
                onChange={(event) => handleOnChange(event)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-12 form-group">
              <label>Camera sau</label>
              <input
                value={inputValues.backcam}
                name="backcam"
                onChange={(event) => handleOnChange(event)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-12 form-group">
              <label>Camera trước</label>
              <input
                value={inputValues.frontcam}
                name="frontcam"
                onChange={(event) => handleOnChange(event)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-12 form-group">
              <label>CPU</label>
              <input
                value={inputValues.cpu}
                name="cpu"
                onChange={(event) => handleOnChange(event)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-12 form-group">
              <label>Ram</label>
              <input
                value={inputValues.ram}
                name="ram"
                onChange={(event) => handleOnChange(event)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-12 form-group">
              <label>Sim</label>
              <input
                value={inputValues.sim}
                name="sim"
                onChange={(event) => handleOnChange(event)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-12 form-group">
              <label>Pin</label>
              <input
                value={inputValues.battery}
                name="battery"
                onChange={(event) => handleOnChange(event)}
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSaveInfor}>
            Lưu thông tin
          </Button>{" "}
          <Button onClick={handleCloseModal}>Hủy</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default AddSizeModal;
