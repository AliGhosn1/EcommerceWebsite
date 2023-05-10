import { useContext } from 'react';

import { CartContext } from '../../context/shopping-cart.context';

import { ShoppingIconContainer, ItemCount, CartIconContainer } from './cart-icon.styles.jsx';

const CartIcon = () =>{

    const { cartState, setCartState, numberOfItems } = useContext(CartContext);

    const onClickHandler = () =>{
        setCartState(!cartState);
    }



    return(
        <CartIconContainer onClick={onClickHandler}>
            <ShoppingIconContainer />
            <ItemCount>{ numberOfItems }</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;