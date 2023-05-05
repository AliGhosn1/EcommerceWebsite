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

export const CartContext = createContext({
    cartState: null,
    setCartState: () => {},
    cartItems: null,
    addItemToCart: () => {},
    numberOfItems: 0
})

export const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [numberOfItems, setNumberOfItems] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    useEffect(() => {
        setNumberOfItems(cartItems.reduce((accumulator, currentItem) => (accumulator + currentItem.quantity), 0));
    }, [cartItems])

    const value = {cartState, setCartState, cartItems, addItemToCart, numberOfItems};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
