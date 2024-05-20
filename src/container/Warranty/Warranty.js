import React from "react";
import { useState } from "react";
import { getWarranty } from "../../services/userService";
import "react-image-lightbox/style.css";
import "./Warranty.css";

const Warranty = () => {
    const [warranty, setWarranty] = useState("");
    const [dataWarranty, setDataWarranty] = useState();
    const handleOnChange = async (keyword) => {
        setWarranty(keyword)
    }

    const handleSearchProduct = async () => {
        let data = await getWarranty(warranty);
        if (data && data.errCode === 0) {
            setDataWarranty(data)
        }
    }

    return (
        <div className="container-fluid p-4">

            <h1 className="text-center">Kiểm tra phạm vi bảo hành của thiết bị</h1>
            <div className="d-flex justify-content-center">
                <div className="mt-2">
                    <input
                        id="warranty"
                        name="warranty"
                        style={{minWidth: "300px"}}
                        onChange={(event) => handleOnChange(event.target.value)}
                        type="text"
                        required
                    />
                </div>
                <div className="ml-2">
                    <button onClick={() => handleSearchProduct()} className="button-3 mt-2" role="button">Tìm kiếm</button>
                </div>
            </div>

            {dataWarranty ?
                <>
                    <div className="d-flex">
                        <div className="product-img">
                            <img style={{ width: "200px", height: "200px" }} src={dataWarranty?.image} alt="" />
                        </div>
                        <div className="mt-4">
                            <p>
                                {dataWarranty?.nameProdudct}
                            </p>
                            <p>
                                {dataWarranty?.messBuyDate}
                            </p>
                            <p>
                                {dataWarranty?.serialNumber}
                            </p>
                        </div>
                    </div>


                    <h2>Phạm vi bảo hành</h2>
                    <div style={{ border: "1px solid #ced4da" }}>
                        <div className="p-4">

                            <h3>Bảo hành giới hạn</h3>
                            <div className="p-2">{dataWarranty?.messWarranty}</div>
                            <h5 className="p-2">Gói bảo hành của bạn bao gồm các quyền lợi sau:</h5>
                            <div className="d-flex">
                                <div className="single-feature">
                                    <div className="title">
                                        <h3>Bảo dưỡng phần cứng</h3>
                                    </div>
                                    <p>Sử dụng dịch vụ sửa chữa và bảo dưỡng được chứng nhận của Apple tại một trong những Nhà cung cấp dịch vụ ủy quyền của Apple</p>
                                </div>
                                <div className="ml-4 single-feature">
                                    <div className="title">
                                        <h3>Hỗ trợ qua chat & điện thoại</h3>
                                    </div>
                                    <p>Hãy liên lạc với chúng tôi qua tính năng trò chuyện hoặc điện thoại để gặp chuyên gia hỗ trợ kỹ thuật</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <></>
            }


        </div>
    );
};
export default Warranty;
