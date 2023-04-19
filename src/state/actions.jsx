import { SET_ACTIVE, SET_QUANTITY, SET_SHOW_MODAL } from "./constants";
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
export const setActive = (value) => {
    return {
        type: SET_ACTIVE,
        payload: value,
    };
}