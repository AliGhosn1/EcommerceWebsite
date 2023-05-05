import { useContext } from "react";

import { CartContext } from "../../context/shopping-cart.context";
import CheckOutItem from "../check-out-item/check-out-item.component";

import './checkout.styles.scss';

const CheckOutPage = () => {

    const {cartItems, addItemToCart, totalPrice} = useContext(CartContext);

    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>
            </div>
            {
                cartItems.map((item) => (
                    <CheckOutItem key={item.id} item={item} />
                ))
            }

            <span className="total">Total: ${totalPrice}</span>
        </div>
    )
}

export default CheckOutPage;