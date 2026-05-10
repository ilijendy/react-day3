import axiosInstance from './axiosInstance';

export const getAllProduct=axiosInstance.get('/product');
export const getProductById=(id)=>axiosInstance.get(`product/${id}`);
export const getCategory=axiosInstance.get('/category');
export const getProductByCategory=(category)=>{
    axiosInstance.get(`/products/category/${category}`)
}
