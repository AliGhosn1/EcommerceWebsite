import { useContext } from "react";

import { CartContext } from "../../context/shopping-cart.context";

import { CheckOutItemContainer, CheckOutItemImageContainer, CheckOutItemRemoveButton } from './check-out-item.styles.jsx';

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
        <CheckOutItemContainer>

            <CheckOutItemImageContainer>
                <img src={ imageUrl } alt={ name }/>
            </CheckOutItemImageContainer>

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
            
            <CheckOutItemRemoveButton onClick={clearHandler}>&#10005;</CheckOutItemRemoveButton>
        </CheckOutItemContainer>
    )
}

export default CheckOutItem;