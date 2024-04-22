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
  return axios.get(`/api/get-all-category-blog?type=${type}`);
};
export const getAllCodeService = (type) => {
  return axios.get(`/api/v1/all-code/get-list-allcode?type=${type}`);
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
export const listRoomOfUser = (userId) => {
  return axios.get(`/api/listRoomOfUser?userId=${userId}`);
};
//=================BLOG=========================//
export const getAllBlog = (data) => {
  return axios.get(
    `/api/get-all-blog?limit=${data.limit}&offset=${data.offset}&subjectId=${data.subjectId}&keyword=${data.keyword}`
  );
};
export const getDetailBlogByIdService = (id) => {
  return axios.get(`/api/get-detail-blog?id=${id}`);
};
export const getFeatureBlog = (limit) => {
  return axios.get(`/api/get-feature-blog?limit=${limit}`);
};
export const getNewBlog = (limit) => {
  return axios.get(`/api/get-new-blog?limit=${limit}`);
};

//========================COMMENT=======================
export const createNewcommentService = (data) => {
  return axios.post(`/api/create-new-comment`, data);
};
export const getAllcommentByBlogIdService = (id) => {
  return axios.get(`/api/get-all-comment-by-blogId?id=${id}`);
};

//==================PRODUCT======================//
export const getDetailProductByIdService = (id) => {
  return axios.get(`/api/get-detail-product-by-id?id=${id}`);
};
export const getProductRecommendService = (data) => {
  return axios.get(
    `/api/get-product-recommend?userId=${data.userId}&limit=${data.limit}`
  );
};
export const getProductFeatureService = (limit) => {
  return axios.get(`/api/get-product-feature?limit=${limit}`);
};
export const getProductNewService = (limit) => {
  return axios.get(`/api/get-product-new?limit=${limit}`);
};

//========================SHOPCART===================//
export const addShopCartService = (data) => {
  return axios.post(`/api/add-shopcart`, data);
};
export const getAllShopCartByUserIdService = (id) => {
  return axios.get(`/api/get-all-shopcart-by-userId?id=${id}`);
};
export const deleteItemShopCartService = (data) => {
  return axios.delete(`/api/delete-item-shopcart`, data);
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
