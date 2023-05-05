import { useContext } from "react";

import { CartContext } from "../../context/shopping-cart.context";

import './check-out-item.styles.scss';

const CheckOutItem = ({ item }) => {

    const { name, imageUrl, price, quantity } = item;

    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const incrementHandler = () => {
        addItemToCart(item);
    }

    const decrementHandler = () => {
        removeItemFromCart(item);
    }

    const clearHandler = () => {
        clearItemFromCart(item);
    }

    // <span onClick={decrementHandler}> - </span> 
    // <span onClick={incrementHandler}> + </span>

    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={ imageUrl } alt={ name }/>
            </div>
            <span className="name"> { name } </span>
            <span className="quantity">
                <div className="arrow" onClick={decrementHandler}>
                    &#10094;
                </div>
                 <span className="value">{ quantity }</span> 
                <div className="arrow" onClick={incrementHandler}>
                    &#10095;
                </div>
                </span>
            <span className="price"> { price } </span>
            <div className='remove-button'  onClick={clearHandler}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem;