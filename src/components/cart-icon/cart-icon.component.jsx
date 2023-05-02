import { useContext } from 'react';

import { CartContext } from '../../context/shopping-cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () =>{

    const { cartState, setCartState } = useContext(CartContext);

    const onClickHandler = () =>{
        setCartState(!cartState);
    }

    return(
        <div className='cart-icon-container' onClick={onClickHandler}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;