import * as publicRequest from '../utils/requestConfig';
export const getAllPublisher = async () => {
    return await publicRequest.getUnauth('publisher');
}
export const getAllPublisherAdmin = async () => {
    return await publicRequest.get('publisher');
}