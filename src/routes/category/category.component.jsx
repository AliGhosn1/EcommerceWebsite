import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.jsx';
import { CategoryContainer, CategoryProductContainer, CategoryTitle } from './category.styles.jsx';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return(
        <CategoryContainer>
            <CategoryTitle>{ category.toUpperCase() }</CategoryTitle>
            <CategoryProductContainer>
                {
                    products && products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </CategoryProductContainer>
        </CategoryContainer>
    )

}

export default Category;