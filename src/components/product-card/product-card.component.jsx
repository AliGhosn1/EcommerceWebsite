import { useContext } from 'react';

import Button from '../button/button.component';
import { CartContext } from '../../context/shopping-cart.context';

import './product-card.styles.scss';

const ProductCard = ( {product} ) => {
    const { name, imageUrl, price } = product;
    const { cartItems, setCartItems } = useContext(CartContext);

    const onClickHandler = () => {
        setCartItems(cartItems => (
            cartItems.concat(product)
        ));
    }

    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={onClickHandler} >Add to cart</Button>
        </div>
    )
}

export default ProductCard