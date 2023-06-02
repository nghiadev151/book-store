import * as publicRequest from '../utils/requestConfig';
export const checkOut = async (data) => {
    return await publicRequest.post('checkout', data);
}
export const getOrders = async () => {
    return await publicRequest.get('orders');
}
export const getOrderById = async (id) => {
    return await publicRequest.get('order/' + id);
}