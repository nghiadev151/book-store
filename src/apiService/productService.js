import * as publicRequest from '../utils/requestConfig';

export const getNewArrivals = async () => {
    return await publicRequest.getUnauth('products/new-arrivals');
}
export const getBestSellers = async () => {
    return await publicRequest.getUnauth('products/bestsellers');
}
export const getAllProduct = async () => {
    return await publicRequest.get('products');
}
export const createProduct = async (data) => {
    return await publicRequest.post('products', data);
}
export const getProductById = async (id) => {
    return await publicRequest.get(`products/${id}`);
}
export const deleteProductById = async (id) => {
    return await publicRequest.del(`products/${id}`);
}
export const updateProductById = async (id, data) => {
    return await publicRequest.put(`products/${id}`, data);
}
export const searchProductByName = async (name) => {
    return await publicRequest.get(`products/search`, {
        params: {
            name
        }
    });
}
export const filterProduct = async (publisher, author, minPrice, maxPrice) => {
    return await publicRequest.get(`products/filter`, {
        params: {
            publisher,
            author,
            minPrice,
            maxPrice
        }
    });
}