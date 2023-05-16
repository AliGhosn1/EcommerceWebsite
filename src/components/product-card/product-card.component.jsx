import { useContext } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CartContext } from '../../context/shopping-cart.context';

import { ProductCardContainer } from './product-card.styles.jsx';

const ProductCard = ( {product} ) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const onClickHandler = () => {
        addItemToCart(product);
    }

    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={ BUTTON_TYPE_CLASSES.inverted } onClick={onClickHandler} >Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard