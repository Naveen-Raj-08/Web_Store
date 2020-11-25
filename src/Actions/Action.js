export const ADD_ITEMS = "ADD_ITEMS";
export const REMOVE_ITEMS = "REMOVE_ITEMS";

//Action for Adding Items

export const addToCart = (item) => {
  return {
    type: ADD_ITEMS,
    payload: {
      item,
      quantity: 1,
    },
  };
};

//Action for Removing Items

export const removeFromCart = (itemId, quantity) => {
  return {
    type: REMOVE_ITEMS,
    payload: {
      itemId,
      quantity: quantity,
    },
  };
};
