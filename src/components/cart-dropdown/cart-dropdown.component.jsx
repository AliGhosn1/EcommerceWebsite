import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/shopping-cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItems, EmptyMessage, CartButton } from './cart-dropdown.styles.jsx';

const CartDropDown = () => {

    const { cartItems, setCartState } = useContext(CartContext);
    const navigate = useNavigate();

    const onClickHandler = () => {
        setCartState(false);
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length ? (cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item}/>
                ))) : 
                (
                    <EmptyMessage>Your cart is empty.</EmptyMessage>
                )
            }
            </CartItems>
            <CartButton onClick={onClickHandler}>GO TO CHECKOUT</CartButton>
        </CartDropdownContainer>
    )
}

export default CartDropDown;