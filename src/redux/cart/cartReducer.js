import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from "./cartType";

const initialState = []

const cartReducer = (state = initialState, action) => {
    var doesItemExist

    switch (action.type) {
        case ADD_TO_CART:
            


        
            return [...state, { ...action.payload, quantity: 1 }];

        case REMOVE_FROM_CART:
            const newCartState = state.filter((item) => {
                if (item.Id === action.productId) {
                    return false;
                }
                return true;
            });
            return newCartState;

        case UPDATE_CART:
            const cartFormArr = Object.keys(action.payload).map((key, index) => {
                return action.payload[key];
            });

            doesItemExist = false;

            const newProdCartState = state.map((item) => {
                let itemFound = cartFormArr.find((element) => element.Id === item.Id);
                if (itemFound) {
                    item.quantity = itemFound.quantity;
                    doesItemExist = true;
                }
                return item;
            });

            if (doesItemExist) {
                return newProdCartState;
            }

            return state;

        default:
            return state;
    }
}
export default cartReducer
