import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/shopping-cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItems } from './cart-dropdown.styles.jsx';

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
                cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item}/>
                ))
            }
            </CartItems>
            <Button onClick={onClickHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropDown;