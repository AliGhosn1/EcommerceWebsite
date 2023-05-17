import { createContext, useReducer } from "react";

import createAction from "../utils/reducer/reducer.util";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === existingCartItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find((item) => item.id === productToRemove.id);

  if (existingCartItem.quantity > 1) {
    return cartItems.map((item) =>
      item.id === existingCartItem.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }

  return clearCartItem(cartItems, productToRemove);
};

const clearCartItem = (cartItems, productToClear) => {
  const existingCartItem = cartItems.find((item) => item.id === productToClear.id);

  if (existingCartItem) {
    return cartItems.filter((data) => data !== existingCartItem);
  }

  return [...cartItems];
};

export const CartContext = createContext({
  cartState: false,
  setCartState: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  numberOfItems: 0,
  totalPrice: 0,
});

const USER_ACTION_TYPES = {
  SET_CART_STATE: 'SET_CART_STATE',
  UPDATE_CART_ITEMS: 'UPDATE_CART_ITEMS'
}

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch(type){
      case USER_ACTION_TYPES.SET_CART_STATE:
          return {
              ...state,
              cartState: payload
          }

      case USER_ACTION_TYPES.UPDATE_CART_ITEMS:
          return {
            ...state,
            ...payload
          }

      default:
          throw new Error(`Unhandeled type ${type} in cartReducer`);
  }
}

const INITIAL_STATE = {
  cartState: false,
  cartItems: [],
  numberOfItems: 0,
  totalPrice: 0,
}

export const CartProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartState, totalPrice, numberOfItems } = state;

  const updateCartReducer = (updatedItems) => {
    const totalPrice = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const numberOfItems = updatedItems.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0);

    const payload = {
      cartItems: updatedItems, 
      totalPrice: totalPrice, 
      numberOfItems: numberOfItems
    }
    
    dispatch(createAction(USER_ACTION_TYPES.UPDATE_CART_ITEMS, payload));
  }

  const addItemToCart = (productToAdd) => {
    const updatedItems = addCartItem(cartItems, productToAdd);
    updateCartReducer(updatedItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const updatedItems = removeCartItem(cartItems, productToRemove);
    updateCartReducer(updatedItems);
  };

  const clearItemFromCart = (productToClear) => {
    const updatedItems = clearCartItem(cartItems, productToClear);
    updateCartReducer(updatedItems);
  };

  const setCartState = (state) =>{
    dispatch(createAction(USER_ACTION_TYPES.SET_CART_STATE, state));
  }

  const value = {
    cartState,
    setCartState,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    numberOfItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
