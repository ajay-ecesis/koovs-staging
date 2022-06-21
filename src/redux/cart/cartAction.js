import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartType";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const removeItemFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
};
