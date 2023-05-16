import { useContext } from "react";

import { CartContext } from "../../context/shopping-cart.context";
import CheckOutItem from "../check-out-item/check-out-item.component";

import { CategoryCheckoutContainer, CheckOutTotal, CheckOutHeader,CheckOutHeaderBlock } from './checkout.styles.jsx';

const CheckOutPage = () => {

    const {cartItems, addItemToCart, totalPrice} = useContext(CartContext);

    return(
        <CategoryCheckoutContainer>
            <CheckOutHeader>
                <CheckOutHeaderBlock><span>Product</span></CheckOutHeaderBlock>
                <CheckOutHeaderBlock><span>Description</span></CheckOutHeaderBlock>
                <CheckOutHeaderBlock><span>Quantity</span></CheckOutHeaderBlock>
                <CheckOutHeaderBlock><span>Price</span></CheckOutHeaderBlock>
                <CheckOutHeaderBlock><span>Remove</span></CheckOutHeaderBlock>
            </CheckOutHeader>
            
            {
                cartItems.map((item) => (
                    <CheckOutItem key={item.id} item={item} />
                ))
            }

            <CheckOutTotal>Total: ${totalPrice}</CheckOutTotal>
        </CategoryCheckoutContainer>
    )
}

export default CheckOutPage;