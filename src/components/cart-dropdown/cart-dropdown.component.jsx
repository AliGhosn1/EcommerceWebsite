import { useContext } from 'react';

import { CartContext } from '../../context/shopping-cart.context';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {
                cartItems.map((item) => (
                    <span>{item.id}</span>
                ))
            }
            </div>
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropDown;