import { ADD_ITEMS } from "./Action";
import { REMOVE_ITEMS } from "./Action";

export const Reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return state + 1;
    case REMOVE_ITEMS:
      return state - 1 < 0 ? state : state - 1;
    default:
      return state;
  }
};
