import { createContext, useState } from "react";

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
    addItemToCart: () => {}
})

export const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {cartState, setCartState, cartItems, addItemToCart};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
