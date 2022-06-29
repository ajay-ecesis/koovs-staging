import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  INITIALIZE_WISHLIST,
} from "./wishlistType";

const initialState = {
  items: [],
};

const wishlistReducer = (state = initialState, action) => {
  var doesItemExist;

  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_FROM_WISHLIST:
      return { ...state, qty: state.qty - action.payload };

    case INITIALIZE_WISHLIST:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};
export default wishlistReducer;
