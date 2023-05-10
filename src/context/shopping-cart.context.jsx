import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id)

    if(existingCartItem){
        return cartItems.map( (item) => 
            item.id === existingCartItem.id ? {...item, quantity: item.quantity + 1} : item
        );
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, productToRemove) => {

    const existingCartItem = cartItems.find((item) => item.id === productToRemove.id)

    if(existingCartItem.quantity > 1){
        return cartItems.map( (item) => 
            item.id === existingCartItem.id ? {...item, quantity: item.quantity - 1} : item
        );
    }

    return clearCartItem(cartItems, productToRemove)
}

const clearCartItem = (cartItems, productToClear) => {

    const existingCartItem = cartItems.find((item) => item.id === productToClear.id);

    if(existingCartItem){
        return cartItems.filter((data, idx) => data !== existingCartItem);
    }

    return [...cartItems];
}

export const CartContext = createContext({
    cartState: null,
    setCartState: () => {},
    cartItems: null,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    numberOfItems: 0,
    totalPrice: 0
})

export const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [numberOfItems, setNumberOfItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    }

    useEffect(() => {
        setNumberOfItems(cartItems.reduce((accumulator, currentItem) => (accumulator + currentItem.quantity), 0));
        setTotalPrice(cartItems.reduce((acc, item) => (acc + (item.price * item.quantity)), 0));
    }, [cartItems])

    const value = {cartState, setCartState, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, numberOfItems, totalPrice};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
