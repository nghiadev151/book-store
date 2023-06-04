

const initialState = {
    products: [],
    quantityItem: 1,
    modal: false,
    modalEdit: false,
    active: 1,
    idEdit:0
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_QUANTITY' : 
        console.log("quanRedu: "+action.payload);
            return {
                ...state, 
                quantityItem: action.payload
            }
        case 'SET_SHOW_MODAL' : 
            return {
                ...state, 
                 modal: action.payload
            }
            case 'SET_SHOW_MODAL_EDIT' : 
            console.log(action.payload);
            return {
                ...state, 
                 modalEdit: action.payload.value,
                 idEdit: action.payload.id
            }
        case 'SET_ACTIVE' : 
        
        localStorage.setItem('active', action.payload)
            return {
                ...state, 
                active: action.payload
            }  
            case 'SET_ID_EDIT' : 
            console.log("idEdit: "+action.payload);
            return {
                ...state, 
                 idEdit: action.payload
                 
            }     
        default:
            return state;
    }
}
export { initialState}
export default reducer;