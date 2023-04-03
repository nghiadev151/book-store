import { SET_QUANTITY } from "./constants";
export const setQuantity = (quantity) => {
    return {
        type: SET_QUANTITY,
        payload: quantity,
    };
}