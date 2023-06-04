import * as publicRequest from '../utils/requestConfig';
export const getAllAuthor = async () => {
    return await publicRequest.getUnauth('author');
}
export const getAllAuthorAdmin = async () => {
    return await publicRequest.get('author');
}