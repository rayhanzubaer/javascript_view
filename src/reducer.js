export const initialState = {
    cart: []
};

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        case 'USER_AUTHENTICATED':
            return {
                ...state,
                user: action.item
            };
        default:
            return state;
    }
};
