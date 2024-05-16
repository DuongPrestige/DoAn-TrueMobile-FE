import axios from "../axios";

//==================LOGIN==========================//
export const handleLoginService = (data) => {
  return axios.post(`/api/v1/user/login`, data);
};
export const checkPhonenumberEmail = (data) => {
  return axios.get(
    `/api/check-phonenumber-email?phonenumber=${data.phonenumber}&email=${data.email}`
  );
};
export const createNewUser = (data) => {
  return axios.post(`/api/v1/user/register`, data);
};
//===============ALL CODE========================//

export const getAllCategoryBlogService = (type) => {
  return axios.get(`/api/v1/all-code/get-all-category-blog?type=${type}`);
};
export const getAllCodeService = (type) => {
  return axios.get(`/api/v1/all-code/get-list-allcode?type=${type}`);
};
//bang get all code by type -- new
export const getAllnewCodeService = (type) => {
  return axios.get(`/api/v1/all-code/get-all-code?type=${type}`);
};

export const getAllCodeServiceByType = (type) => {
  return axios.get(`/api/v1/all-code/get-all-category-blog?type=${type}`);
};
export const getAllCodeServiceSubject = () => {
  return axios.get(
    `/api/v1/all-code/get-list-allcode?limit=100&page=0&keyword=&type=SUBJECT`
  );
};

export const getAllCodeServiceDiscount = () => {
  return axios.get(
    `/api/v1/all-code/get-list-allcode?limit=100&page=0&keyword=&type=DISCOUNT`
  );
};
//==================USER==========================//
export const getAllUsers = (data) => {
  return axios.get(
    `/api/v1/user/get-all-user?limit=${data.limit}&offset=${data.offset}&keyword=${data.keyword}`
  );
};
export const deleteUserService = (userId) => {
  return axios.delete(`/api/v1/user/delete-user`, {
    data: {
      id: userId,
    },
  });
};

export const UpdateUserService = (data) => {
  return axios.put(`/api/v1/user/update-user`, data);
};
export const getDetailUserByEmail = (email) => {
  return axios.get(`/api/get-detail-user-by-email?email=${email}`);
};

export const getDetailUserById = (id) => {
  return axios.get(`/api/v1/user/get-user-by-id?id=${id}`);
};

export const handleSendVerifyEmail = (data) => {
  return axios.post(`/api/send-verify-email`, data);
};
export const handleVerifyEmail = (data) => {
  return axios.post(`/api/verify-email`, data);
};
export const handleChangePassword = (data) => {
  return axios.post(`/api/v1/user/change-password`, data);
};
//==================CATEGORY==========================//
//show category
export const getListAllCodeService = (data) => {
  return axios.get(
    `/api/v1/all-code/get-list-allcode?limit=${data.limit}&page=${data.page}&keyword=${data.keyword}&type=${data.type}`
  );
};

export const createAllCodeService = (data) => {
  return axios.post(`/api/v1/all-code/create-new-all-code`, data);
};
export const DeleteAllcodeService = (id) => {
  return axios.delete(`/api/v1/all-code/delete-all-code`, {
    data: {
      id: id,
    },
  });
};
export const UpdateAllcodeService = (data) => {
  return axios.post(`/api/v1/all-code/update-all-code`, data);
};

export const getDetailAllcodeById = (id) => {
  return axios.get(`/api/v1/all-code/get-detail-all-code-by-id?id=${id}`);
};

//======================MESSSAGE==========================//
export const createNewRoom = (data) => {
  return axios.post(`/api/v1/message/create-new-room`, data)
}
export const sendMessage = (data) => {
  return axios.post(`/api/v1/message/sendMessage`, data)
}
export const loadMessage = (roomId, userId) => {
  return axios.get(`/api/v1/message/loadMessage?roomId=${roomId}&userId=${userId}`)

}
export const listRoomOfUser = (userId) => {
  return axios.get(`/api/v1/message/listRoomOfUser?userId=${userId}`)

}
export const listRoomOfAdmin = () => {
  return axios.get(`/api/v1/message/listRoomOfAdmin`)

}

//=================BLOG=========================//
export const createNewBlogrService = (data) => {
  return axios.post(`/api/v1/blog/create-new-blog`, data);
};
export const updateBlogService = (data) => {
  return axios.put(`/api/v1/blog/update-blog`, data);
};
export const deleteBlogService = (data) => {
  return axios.delete(`/api/v1/blog/delete-blog`, data);
};
export const getDetailBlogByIdService = (id) => {
  return axios.get(`/api/v1/blog/get-detail-blog?id=${id}`);
};
export const getAllBlog = (data) => {
  return axios.get(
    `/api/v1/blog/get-all-blog?limit=${data.limit}&offset=${data.offset}&subjectId=${data.subjectId}&keyword=${data.keyword}`
  );
};
export const getFeatureBlog = (limit) => {
  return axios.get(`/api/v1/blog/get-feature-blog?limit=${limit}`);
};
export const getNewBlog = (limit) => {
  return axios.get(`/api/v1/blog/get-new-blog?limit=${limit}`);
};

//===================TYPESHIP=====================//
export const createNewTypeShipService = (data) => {
  return axios.post(`/api/v1/typeship/create-new-typeship`, data);
};
export const updateTypeShipService = (data) => {
  return axios.put(`/api/v1/typeship/update-typeship`, data);
};
export const deleteTypeShipService = (data) => {
  return axios.delete(`/api/v1/typeship/delete-typeship`, data);
};
export const getDetailTypeShipByIdService = (id) => {
  return axios.get(`/api/v1/typeship/get-detail-typeship?id=${id}`);
};
export const getAllTypeShip = (data) => {
  return axios.get(
    `/api/v1/typeship/get-all-typeship?limit=${data.limit}&offset=${data.offset}&keyword=${data.keyword}`
  );
};
//=======================SUPPLIER==========================//
export const createNewSupplierService = (data) => {
  return axios.post(`/api/v1/supplier/create-new-supplier`, data);
};
export const updateSupplierService = (data) => {
  return axios.put(`/api/v1/supplier/update-supplier`, data);
};
export const deleteSupplierService = (data) => {
  return axios.delete(`/api/v1/supplier/delete-supplier`, data);
};
export const getDetailSupplierByIdService = (id) => {
  return axios.get(`/api/v1/supplier/get-detail-supplier-byId?id=${id}`);
};
export const getAllSupplier = (data) => {
  return axios.get(
    `/api/v1/supplier/get-all-supplier?limit=${data.limit}&offset=${data.offset}&keyword=${data.keyword}`
  );
};
//========================COMMENT=======================
export const createNewcommentService = (data) => {
  return axios.post(`/api/v1/review/create-new-comment`, data);
};
export const getAllcommentByBlogIdService = (id) => {
  return axios.get(`/api/v1/review/get-all-comment-by-blogId?id=${id}`);
};
export const ReplycommentService = (data) => {
  return axios.post(`/api/v1/review/reply-comment`, data);
};
export const deletecommentService = (data) => {
  return axios.delete(`/api/v1/review/delete-comment`, data);
};
//==================PRODUCT======================//
export const getProductRecommendService = (data) => {
  return axios.get(
    `/api/get-product-recommend?userId=${data.userId}&limit=${data.limit}`
  );
};
export const CreateNewProduct = (data) => {
  return axios.post(`/api/v1/product/create-new-product`, data);
};
export const getAllProductUser = (data) => {
  return axios.get(
    `/api/v1/product/get-all-product-user?limit=${data.limit}&offset=${data.offset}&sortPrice=${data.sortPrice}&sortName=${data.sortName}&categoryId=${data.categoryId}&brandId=${data.brandId}&keyword=${data.keyword}`
  );
};
export const getAllProductAdmin = (data) => {
  return axios.get(
    `/api/v1/product/get-all-product-admin?limit=${data.limit}&offset=${data.offset}&sortPrice=${data.sortPrice}&sortName=${data.sortName}&categoryId=${data.categoryId}&brandId=${data.brandId}&keyword=${data.keyword}`
  );
};
export const handleInActiveProductService = (data) => {
  return axios.post(`/api/v1/product/unactive-product`, data);
};
export const handleActiveProductService = (data) => {
  return axios.post(`/api/v1/product/active-product`, data);
};
export const getDetailProductByIdService = (id) => {
  return axios.get(`/api/v1/product/get-detail-product-by-id?id=${id}`);
};
export const UpdateProductService = (data) => {
  return axios.put(`/api/v1/product/update-product`, data);
};
export const getAllProductDetailByIdService = (data) => {
  return axios.get(
    `/api/v1/product/get-all-product-detail-by-id?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
  );
};
export const getAllProductDetailImageByIdService = (data) => {
  return axios.get(
    `/api/v1/product/get-all-product-detail-image-by-id?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
  );
};
export const getAllProductDetailConfigByIdService = (data) => {
  return axios.get(
    `/api/v1/product/get-all-product-detail-config-by-id?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
  );
};

export const CreateNewProductDetailService = (data) => {
  return axios.post(`/api/v1/product/create-new-product-detail`, data);
};
export const getProductDetailByIdService = (id) => {
  return axios.get(`/api/v1/product/get-product-detail-by-id?id=${id}`);
};
export const UpdateProductDetailService = (data) => {
  return axios.put(`/api/v1/product/update-product-detail`, data);
};
export const createNewProductImageService = (data) => {
  return axios.post(`api/v1/product/create-product-detail-image`, data);
};
export const getProductDetailImageByIdService = (id) => {
  return axios.get(`/api/v1/product/get-product-detail-image-by-id?id=${id}`);
};
export const UpdateProductDetailImageService = (data) => {
  return axios.put(`/api/v1/product/update-product-detail-image`, data);
};
export const DeleteProductDetailImageService = (data) => {
  return axios.delete(`/api/v1/product/delete-product-detail-image`, data);
};
export const DeleteProductDetailService = (data) => {
  return axios.delete(`/api/v1/product/delete-product-detail`, data);
};
export const createNewProductSizeService = (data) => {
  return axios.post(`/api/v1/product/create-product-detail-config`, data);
};
export const getProductDetailSizeByIdService = (id) => {
  return axios.get(
    `/api/v1/product/get-detail-product-detail-config-by-id?id=${id}`
  );
};
export const UpdateProductDetailSizeService = (data) => {
  return axios.put(`/api/update-product-detail-size`, data);
};
export const DeleteProductDetailSizeService = (data) => {
  return axios.delete(`/api/v1/product/delete-product-detail-config`, data);
};
export const getProductFeatureService = (limit) => {
  return axios.get(`/api/v1/product/get-product-feature?limit=${limit}`);
};
export const getProductNewService = (limit) => {
  return axios.get(`/api/v1/product/get-product-new?limit=${limit}`);
};
//===================TYPE VOUCHER===============//
export const createNewTypeVoucherService = (data) => {
  return axios.post(`/api/v1/typevoucher/create-new-typevoucher`, data);
};
export const updateTypeVoucherService = (data) => {
  return axios.put(`/api/v1/typevoucher/update-typevoucher`, data);
};
export const deleteTypeVoucherService = (data) => {
  return axios.delete(`/api/v1/typevoucher/delete-typevoucher`, data);
};
export const getDetailTypeVoucherByIdService = (id) => {
  return axios.get(`/api/v1/typevoucher/get-detail-typevoucher?id=${id}`);
};
export const getAllTypeVoucher = (data) => {
  return axios.get(
    `/api/v1/typevoucher/get-all-typevoucher?limit=${data.limit}&offset=${data.offset}`
  );
};
export const getSelectTypeVoucher = () => {
  return axios.get(`/api/v1/typevoucher/get-select-typevoucher`);
};
//=====================VOUCHER===================//
export const createNewVoucherService = (data) => {
  return axios.post(`/api/v1/voucher/create-new-voucher`, data);
};
export const updateVoucherService = (data) => {
  return axios.put(`/api/v1/voucher/update-voucher`, data);
};
export const deleteVoucherService = (data) => {
  return axios.delete(`/api/v1/voucher/delete-voucher`, data);
};
export const getDetailVoucherByIdService = (id) => {
  return axios.get(`/api/v1/voucher/get-detail-voucher?id=${id}`);
};
export const getAllVoucher = (data) => {
  return axios.get(
    `/api/v1/voucher/get-all-voucher?limit=${data.limit}&offset=${data.offset}`
  );
};
export const saveUserVoucherService = (data) => {
  return axios.post(`/api/v1/voucher/save-user-voucher`, data);
};
export const getAllVoucherByUserIdService = (data) => {
  return axios.get(
    `/api/v1/voucher/get-all-voucher-by-userid?limit=${data.limit}&offset=${data.offset}&id=${data.id}`
  );
};

//========================SHOPCART===================//
export const addShopCartService = (data) => {
  return axios.post(`/api/v1/shopcart/add-shopcart`, data);
};
export const getAllShopCartByUserIdService = (id) => {
  return axios.get(`/api/v1/shopcart/get-all-shopcart-by-userId?id=${id}`);
};
export const deleteItemShopCartService = (data) => {
  return axios.delete(`/api/v1/shopcart/delete-item-shopcart`, data);
};
//===============BANNER======================//
export const createNewBannerService = (data) => {
  return axios.post(`/api/v1/banner/create-new-banner`, data);
};
export const updateBannerService = (data) => {
  return axios.put(`/api/v1/banner/update-banner`, data);
};
export const deleteBannerService = (data) => {
  return axios.delete(`/api/v1/banner/delete-banner`, data);
};
export const getDetailBannerByIdService = (id) => {
  return axios.get(`/api/v1/banner/get-detail-banner?id=${id}`);
};
export const getAllBanner = (data) => {
  return axios.get(
    `/api/v1/banner/get-all-banner?limit=${data.limit}&offset=${data.offset}&keyword=${data.keyword}`
  );
};
//========================REVIEW======================//
export const createNewReviewService = (data) => {
  return axios.post(`/api/v1/review/create-new-review`, data);
};
export const getAllReviewByProductIdService = (id) => {
  return axios.get(`/api/v1/review/get-all-review-by-productId?id=${id}`);
};
export const ReplyReviewService = (data) => {
  return axios.post(`/api/v1/review/reply-review`, data);
};
export const deleteReviewService = (data) => {
  return axios.delete(`/api/v1/review/delete-review`, data);
};

//=======================RECEIPT==========================//
export const createNewReceiptService = (data) => {
  return axios.post(`/api/v1/receipt/create-new-receipt`, data);
};
export const updateReceiptService = (data) => {
  return axios.put(`/api/v1/receipt/update-receipt`, data);
};
export const deleteReceiptService = (data) => {
  return axios.delete(`/api/v1/receipt/delete-receipt`, data);
};
export const getDetailReceiptByIdService = (id) => {
  return axios.get(`/api/v1/receipt/get-detail-receipt?id=${id}`);
};
export const getAllReceipt = (data) => {
  return axios.get(
    `/api/v1/receipt/get-all-receipt?limit=${data.limit}&offset=${data.offset}`
  );
};
export const createNewReceiptDetailService = (data) => {
  return axios.post(`/api/v1/receipt/create-new-detail-receipt`, data);
};
//=========================ADDRESS USER==============//
export const createNewAddressUserrService = (data) => {
  return axios.post(`/api/v1/addressuser/create-new-address-user`, data);
};
export const deleteAddressUserService = (data) => {
  return axios.delete(`/api/v1/addressuser/delete-address-user`, data);
};
export const editAddressUserService = (data) => {
  return axios.put(`/api/v1/addressuser/edit-address-user`, data);
};
export const getAllAddressUserByUserIdService = (userId) => {
  return axios.get(`/api/v1/addressuser/get-all-address-user?userId=${userId}`);
};
export const getDetailAddressUserByIdService = (id) => {
  return axios.get(
    `/api/v1/addressuser/get-detail-address-user-by-id?id=${id}`
  );
};

//==========================ORDER====================//
export const createNewOrderService = (data) => {
  return axios.post(`/api/v1/order/create-new-order`, data);
};
export const getAllOrder = (data) => {
  return axios.get(
    `/api/v1/order/get-all-order?limit=${data.limit}&offset=${data.offset}&statusId=${data.statusId}`
  );
};
export const getDetailOrder = (id) => {
  return axios.get(`/api/v1/order/get-detail-order?id=${id}`);
};
export const updateStatusOrderService = (data) => {
  return axios.put(`/api/v1/order/update-status-order`, data);
};

export const getAllOrdersByUser = (userId) => {
  return axios.get(`/api/v1/order/get-all-order-by-user?userId=${userId}`);
};
export const paymentOrderService = (data) => {
  return axios.post(`/api/v1/order/payment-order`, data);
};
export const paymentOrderSuccessService = (data) => {
  return axios.post(`/api/v1/order/payment-order-success`, data);
};
export const paymentOrderVnpaySuccessService = (data) => {
  return axios.post(`/api/v1/order/payment-order-vnpay-success`, data);
};
export const paymentOrderVnpayService = (data) => {
  return axios.post(`/api/v1/order/payment-order-vnpay`, data);
};
export const confirmOrderVnpay = (data) => {
  return axios.post(`/api/v1/order/vnpay_return`, data);
};
//======================STATISTIC========================//
export const getCountCardStatistic = () => {
  return axios.get(`/api/get-count-card-statistic`);
};
export const getCountStatusOrder = (data) => {
  return axios.get(
    `/api/get-count-status-order?oneDate=${data.oneDate}&twoDate=${data.twoDate}&type=${data.type}`
  );
};
export const getStatisticByMonth = (year) => {
  return axios.get(`/api/get-statistic-by-month?year=${year}`);
};
export const getStatisticByDay = (data) => {
  return axios.get(
    `/api/get-statistic-by-day?year=${data.year}&month=${data.month}`
  );
};
export const getStatisticOverturn = (data) => {
  return axios.get(
    `/api/get-statistic-overturn?oneDate=${data.oneDate}&twoDate=${data.twoDate}&type=${data.type}`
  );
};
export const getStatisticProfit = (data) => {
  return axios.get(
    `/api/get-statistic-profit?oneDate=${data.oneDate}&twoDate=${data.twoDate}&type=${data.type}`
  );
};
export const getStatisticStockProduct = (data) => {
  return axios.get(
    `/api/get-statistic-stock-product?limit=${data.limit}&offset=${data.offset}`
  );
};
//======================THIRTY SERVICE==========================//
export const getExchangeRate = () => {
  return axios.get(
    `https://tygia.com/json.php?ran=0&gold=0&bank=VIETCOM&date=now`
  );
};
