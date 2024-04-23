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
export const CreateNewProduct = (data) => {
  return axios.post(`/api/create-new-product`, data)
}
export const getAllProductUser = (data) => {
  return axios.get(`/api/get-all-product-user?limit=${data.limit}&offset=${data.offset}&sortPrice=${data.sortPrice}&sortName=${data.sortName}&categoryId=${data.categoryId}&brandId=${data.brandId}&keyword=${data.keyword}`)

}
export const getAllProductAdmin = (data) => {
  return axios.get(`/api/v1/product/get-all-product-admin?limit=${data.limit}&offset=${data.offset}&sortPrice=${data.sortPrice}&sortName=${data.sortName}&categoryId=${data.categoryId}&brandId=${data.brandId}&keyword=${data.keyword}`)

}
export const handleInActiveProductService = (data) => {
  return axios.post(`/api/v1/product/unactive-product`, data)
}
export const handleActiveProductService = (data) => {
  return axios.post(`/api/v1/product/active-product`, data)
}
export const getDetailProductByIdService = (id) => {
  return axios.get(`/api/get-detail-product-by-id?id=${id}`)
}
export const UpdateProductService = (data) => {
  return axios.put(`/api/update-product`, data)
}
export const getAllProductDetailByIdService = (data) => {
  return axios.get(`/api/v1/product/get-product-detail-by-id?id=${data.id}&limit=${data.limit}&offset=${data.offset}`)
}
export const getAllProductDetailImageByIdService = (data) => {
  return axios.get(`/api/v1/product/get-product-detail-image-by-id?id=${data.id}&limit=${data.limit}&offset=${data.offset}`)
}
export const getAllProductDetailSizeByIdService = (data) => {
  return axios.get(`/api/get-all-product-detail-size-by-id?id=${data.id}&limit=${data.limit}&offset=${data.offset}`)
}
export const CreateNewProductDetailService = (data) => {
  return axios.post(`/api/create-new-product-detail`, data)
}
export const getProductDetailByIdService = (id) => {
  return axios.get(`/api/get-product-detail-by-id?id=${id}`)
}
export const UpdateProductDetailService = (data) => {
  return axios.put(`/api/update-product-detail`, data)
}
export const createNewProductImageService = (data) => {
  return axios.post(`/api/create-product-detail-image`, data)
}
export const getProductDetailImageByIdService = (id) => {
  return axios.get(`/api/get-product-detail-image-by-id?id=${id}`)
}
export const UpdateProductDetailImageService = (data) => {
  return axios.put(`/api/update-product-detail-image`, data)
}
export const DeleteProductDetailImageService = (data) => {
  return axios.delete(`/api/delete-product-detail-image`, data)
}
export const DeleteProductDetailService = (data) => {
  return axios.delete(`/api/v1/product/delete-product-detail`, data)
}
export const createNewProductSizeService = (data) => {
  return axios.post(`/api/create-product-detail-size`, data)
}
export const getProductDetailSizeByIdService = (id) => {
  return axios.get(`/api/get-detail-product-detail-size-by-id?id=${id}`)
}
export const UpdateProductDetailSizeService = (data) => {
  return axios.put(`/api/update-product-detail-size`, data)
}
export const DeleteProductDetailSizeService = (data) => {
  return axios.delete(`/api/delete-product-detail-size`, data)
}
export const getProductFeatureService = (limit) => {
  return axios.get(`/api/get-product-feature?limit=${limit}`)
}
export const getProductNewService = (limit) => {
  return axios.get(`/api/get-product-new?limit=${limit}`)
}
export const getProductShopcartService = (data) => {
  return axios.get(`/api/get-product-shopcart?userId=${data.userId}&limit=${data.limit}`)
}
export const getProductRecommendService = (data) => {
  return axios.get(`/api/get-product-recommend?userId=${data.userId}&limit=${data.limit}`)
}

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
