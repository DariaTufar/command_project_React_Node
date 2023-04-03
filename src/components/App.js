import { Routes, Route, Navigate } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';

import { CategoriesPage } from 'pages/CategoriesPage';
import MainPage from 'pages/MainPage/MainPage';
import { AddRecipePage } from 'pages/AddRecipePage';
import FavoritePage from 'pages/FavoritePage';
import { MyRecipesPage } from 'pages/MyRecipesPage';
import { RecipePage } from 'pages/RecipePage';
import { SearchPage } from 'pages/SearchPage';
import { ShoppingListPage } from 'pages/ShoppingListPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ApiTest } from 'api/testComponents/ApiTest';
import { AuthPage } from 'pages/AuthPage/AuthPage';
import { WelcomePage } from 'pages/WelcomePage';
import { GlobalStyle } from './GlobalStyle';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route
          path="welcome"
          element={<RestrictedRoute component={<WelcomePage />} />}
        />
        <Route
          path="signin"
          element={<RestrictedRoute component={<AuthPage type="signin" />} />}
        />
        <Route
          path="register"
          element={<RestrictedRoute component={<AuthPage type="register" />} />}
        />

        <Route path="/" element={<PrivateRoute component={<SharedLayout />} />}>
          <Route index element={<MainPage />} />
          <Route path="categories/:categoryName" element={<CategoriesPage />} />
          <Route path="add" element={<AddRecipePage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="my" element={<MyRecipesPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="api-test" element={<ApiTest />} />
          <Route path="*" element={<Navigate to={<NotFoundPage />} />} />
        </Route>
      </Routes>
    </div>
  );
};
