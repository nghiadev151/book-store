import * as publicRequest from '../utils/requestConfig';
export const checkOut = async (data) => {
    return await publicRequest.post('checkout', data);
}
export const getOrders = async (page, size) => {
    return await publicRequest.get(`orders?page=${page}&size=${size}`);
}
export const getOrderById = async (id) => {
    return await publicRequest.get('order/' + id);
}
export const cancelOrder = async (id) => {
    return await publicRequest.del('order/' + id);
}
export const updateOrder = async (id, data) => {
    return await publicRequest.put('order/' + id, data);
}