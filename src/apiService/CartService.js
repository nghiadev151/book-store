import * as publicRequest from '../utils/requestConfig';
export const getCart = async () => {
    return await publicRequest.get('carts');
}
export const addToCart = async (data) => {
    return await publicRequest.post('carts', data);
}
export const updateQuantity = async (data) => {
    return await publicRequest.put('carts', data);
}
export const removeFromCart = async (id) => {
    return await publicRequest.del('carts/items/' + id);
}