import { ADD_TO_CART, REMOVE_FROM_CART, INITIALIZE_CART } from "./cartType";

const initialState = {
  qty: 0,
  items: [],
  skuId:[]
};

const cartReducer = (state = initialState, action) => {
  console.log("action payload", action.payload);

  var doesItemExist;

  switch (action.type) {
    case ADD_TO_CART:
      if (state.items) {
        for (let i = 0; i < state?.items?.length; i++) {
          console.log("This is the state", state.items[i]);

          let skuid = state?.items[i]?.product?.sku;
          if (skuid == action.payload.sku) {
            alert("sku id same");
            return state;
          }
        }
      } else {
        let arr = [action.payload];
        return (state = {
          qty: 1,
          items: arr,
        });
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_FROM_CART:
      return { ...state, qty: state.qty - action.payload };

    case INITIALIZE_CART:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};
export default cartReducer;
