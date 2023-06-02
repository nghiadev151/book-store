import * as publicRequest from '../utils/requestConfig';
export const login = async (data) => {
    return await publicRequest.postUnAuth('auth/authenticate', data);
}
export const logout = async () => {
    return await publicRequest.post('auth/logout');
}
export const register = async (data) => {
    return await publicRequest.post('auth/register', data);
}
export const refreshToken = async () => {
    return await publicRequest.post('auth/refresh-token');
}