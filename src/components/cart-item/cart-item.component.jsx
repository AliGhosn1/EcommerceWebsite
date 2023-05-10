import { CartItemContainer, ItemName, ItemDetails } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem;

    return(
        <CartItemContainer>
            <img src={imageUrl} alt={name}/>
            <ItemDetails>
                <ItemName>{ name }</ItemName>
                <span>{ quantity } X ${ price }</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;