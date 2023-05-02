import { createContext, useState } from "react";

export const CartContext = createContext({
    cartState: null,
    setCartState: null,
    cartItems: null,
    setCartItems: null
})

export const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const value = {cartState, setCartState, cartItems, setCartItems};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
