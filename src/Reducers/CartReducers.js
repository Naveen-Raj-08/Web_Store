import { ADD_ITEMS } from "../Actions/Action";
import { REMOVE_ITEMS } from "../Actions/Action";

const InitialState = {
  ProductCart: [],
};

export const cartReducers = (state = InitialState, action) => {
  let cart = state.ProductCart;
  switch (action.type) {
    case ADD_ITEMS:
      cart.push(action.payload);
      return {
        ...state,
        ProductCart: cart,
      };
    case REMOVE_ITEMS:
      return {
        ...state,
        ProductCart: cart.filter(
          (item) => item.Items.id !== action.payload.itemId
        ),
      };
    default:
      return state;
  }
};
