import axios from "../axios";

//==================LOGIN==========================//
export const handleLoginService = (data) => {
    return axios.post(`/api/v1/user/login`, data)

}
export const checkPhonenumberEmail = (data) => {
    return axios.get(`/api/check-phonenumber-email?phonenumber=${data.phonenumber}&email=${data.email}`)

}
export const createNewUser = (data) => {
    return axios.post(`/api/v1/user/register`, data)

}
//===============ALL CODE========================//

export const getAllCategoryBlogService = (type) => {
    return axios.get(`/api/get-all-category-blog?type=${type}`)

}

//======================MESSSAGE==========================//
export const listRoomOfUser = (userId) => {
    return axios.get(`/api/listRoomOfUser?userId=${userId}`)

}
//=================BLOG=========================//
export const getAllBlog = (data) => {
    return axios.get(`/api/get-all-blog?limit=${data.limit}&offset=${data.offset}&subjectId=${data.subjectId}&keyword=${data.keyword}`)
}
export const getDetailBlogByIdService = (id) => {
    return axios.get(`/api/get-detail-blog?id=${id}`)
}
export const getFeatureBlog = (limit) => {
    return axios.get(`/api/get-feature-blog?limit=${limit}`)
}
export const getNewBlog = (limit) => {
    return axios.get(`/api/get-new-blog?limit=${limit}`)
}

//========================COMMENT=======================
export const createNewcommentService = (data) => {
    return axios.post(`/api/create-new-comment`, data)
}
export const getAllcommentByBlogIdService = (id) => {
    return axios.get(`/api/get-all-comment-by-blogId?id=${id}`)
}

//==================PRODUCT======================//
export const getDetailProductByIdService = (id) => {
    return axios.get(`/api/get-detail-product-by-id?id=${id}`)
}
export const getProductRecommendService = (data) => {
    return axios.get(`/api/get-product-recommend?userId=${data.userId}&limit=${data.limit}`)
}
export const getProductFeatureService = (limit) => {
    return axios.get(`/api/get-product-feature?limit=${limit}`)
}
export const getProductNewService = (limit) => {
    return axios.get(`/api/get-product-new?limit=${limit}`)
}

//========================SHOPCART===================//
export const addShopCartService = (data) => {
    return axios.post(`/api/add-shopcart`, data)
}
export const getAllShopCartByUserIdService = (id) => {
    return axios.get(`/api/get-all-shopcart-by-userId?id=${id}`)
}
export const deleteItemShopCartService = (data) => {
    return axios.delete(`/api/delete-item-shopcart`, data)
}
//===============BANNER======================//
export const createNewBannerService = (data) => {
    return axios.post(`/api/create-new-banner`, data)
}
export const updateBannerService = (data) => {
    return axios.put(`/api/update-banner`, data)
}
export const deleteBannerService = (data) => {
    return axios.delete(`/api/delete-banner`, data)
}
export const getDetailBannerByIdService = (id) => {
    return axios.get(`/api/get-detail-banner?id=${id}`)
}
export const getAllBanner = (data) => {
    return axios.get(`/api/get-all-banner?limit=${data.limit}&offset=${data.offset}&keyword=${data.keyword}`)
}
