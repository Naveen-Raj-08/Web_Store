import { ProductReducers } from "./ProductReducers";
import { cartReducers } from "./CartReducers";
import { combineReducers } from "redux";

export const RootReducer = combineReducers({
  productState: ProductReducers,
  cartState: cartReducers,
});
