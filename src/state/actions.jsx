import { SET_ACTIVE, SET_QUANTITY, SET_SHOW_MODAL, SET_ID_EDIT, SET_SHOW_MODAL_EDIT } from "./constants";
export const setQuantity = (quantity) => {
    return {
        type: SET_QUANTITY,
        payload: quantity,
    };
}
export const setShowModal = (value) => {
    return {
        type: SET_SHOW_MODAL,
        payload: value,
    };
}
export const setShowModalEdit = (value, id) => {
    return {
        type: SET_SHOW_MODAL_EDIT,
        payload: {value, id},
    };
}
export const setActive = (value) => {
    return {
        type: SET_ACTIVE,
        payload: value,
    };
}
export const setIdEdit = (value) => {
    
    return {
        type: SET_ID_EDIT,
        payload: value,
    };
 
}