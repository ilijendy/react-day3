import axiosInstance from './axiosInstance';

export const getAllProduct=()=>axiosInstance.get('/products');
export const getProductById=(id)=>axiosInstance.get(`/products/${id}`);
export const getCategory=()=>axiosInstance.get('/products/categories');
export const getProductByCategory=(category)=>
    axiosInstance.get(`/products/category/${category}`);
