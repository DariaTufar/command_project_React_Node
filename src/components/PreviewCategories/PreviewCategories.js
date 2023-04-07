import { useMainRecipes } from '../../api/hooks';
import { Loader } from 'components/Loader/Loader';
import {
  CategoriesList,
  OtherCategories,
  CategoriesItem,
} from './PreviewCategories.styled';
import { DishCard } from 'components/DishCard/DishCard';

const PreviewCategories = () => {
  const { data: recipes, error, isLoading } = useMainRecipes();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        <div>
          <h2>Breakfast</h2>
          <CategoriesList>
            {recipes
              .filter(({ category }) => category === 'Breakfast')
              .map(({ _id: id, title, thumb }) => (
                <CategoriesItem key={id}>
                  <DishCard id={id} title={title} image={thumb} />
                </CategoriesItem>
              ))}
          </CategoriesList>
        </div>
        <div>
          <h2>Miscellaneous</h2>
          <CategoriesList>
            {recipes
              ?.filter(({ category }) => category === 'Miscellaneous')
              .map(({ _id: id, title, thumb }) => (
                <CategoriesItem key={id}>
                  <DishCard id={id} title={title} image={thumb} />
                </CategoriesItem>
              ))}
          </CategoriesList>
        </div>
        <div>
          <h2>Chicken</h2>
          <CategoriesList>
            {recipes
              ?.filter(({ category }) => category === 'Chicken')
              .map(({ _id: id, title, thumb }) => (
                <CategoriesItem key={id}>
                  <DishCard id={id} title={title} image={thumb} />
                </CategoriesItem>
              ))}
          </CategoriesList>
        </div>
        <div>
          <h2>Desserts</h2>
          <CategoriesList>
            {recipes
              ?.filter(({ category }) => category === 'Dessert')
              .map(({ _id: id, title, thumb }) => (
                <CategoriesItem key={id}>
                  <DishCard id={id} title={title} image={thumb} />
                </CategoriesItem>
              ))}
          </CategoriesList>
        </div>
        <OtherCategories to="/categories">Other categories</OtherCategories>
      </div>
    </>
  );
};

export default PreviewCategories;
