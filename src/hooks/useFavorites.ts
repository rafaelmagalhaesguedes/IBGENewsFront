import { useState, useEffect } from 'react';
import { NewsType } from '../types/types';

const useFavorites = (item: NewsType) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isRecipeFavorited = favoriteRecipes
      .some((favRecipe: any) => favRecipe.id === item.id);
    setIsFavorited(isRecipeFavorited);
  }, [item]);

  const handleFavoriteClick = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favorites') || '[]');

    const index = favoriteRecipes
      .findIndex((favRecipe: any) => favRecipe.id === item.id);

    if (index !== -1) {
      favoriteRecipes.splice(index, 1);
      setIsFavorited(false);
    } else {
      favoriteRecipes.push(item);
      setIsFavorited(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favoriteRecipes));
  };

  return { isFavorited, handleFavoriteClick };
};

export default useFavorites;
