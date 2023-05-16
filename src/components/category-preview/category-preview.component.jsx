import { useNavigate } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import { CategoryPreviewContainer, CategoryPreviewTitle, CategoryPreviewPreview } from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(title.toLowerCase());
    }

    return(
        <CategoryPreviewContainer>
            <h2><CategoryPreviewTitle onClick={onClickHandler}>{ title.toUpperCase() }</CategoryPreviewTitle></h2>
            <CategoryPreviewPreview>
                {
                    products.filter((_, idx) => idx < 4).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </CategoryPreviewPreview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;