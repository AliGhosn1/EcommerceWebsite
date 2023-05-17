import { useNavigate } from "react-router-dom";
import {
  CategoryItemContainer,
  CategoryBackgroundImage,
  CategoryBodyContainer,
  CategoryBodyTitle,
  CategoryBodyText,
} from "./category-item.styles.jsx";

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(route);
  };

  return (
    <CategoryItemContainer onClick={onClickHandler}>
      <CategoryBackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer className="category-body-container">
        <CategoryBodyTitle>{title}</CategoryBodyTitle>
        <CategoryBodyText>Shop Now</CategoryBodyText>
      </CategoryBodyContainer>
    </CategoryItemContainer>
  );
};

export default CategoryItem;