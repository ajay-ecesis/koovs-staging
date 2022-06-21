import { ADD_TO_CART, REMOVE_FROM_CART, INITIALIZE_CART } from "./cartType";

const initialState = {
  qty: 0,
};

const cartReducer = (state = initialState, action) => {
  console.log("action payload", action.payload);
  var doesItemExist;

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, qty: state.qty + action.payload };

    case REMOVE_FROM_CART:
      return { ...state, qty: state.qty - action.payload };

    case INITIALIZE_CART:
      return { ...state, qty: action.payload };

    default:
      return state;
  }
};
export default cartReducer;
