export const addToCart = (recipe) => ({
    type: 'ADD_TO_CART',
    payload: recipe,
  });
  
  export const removeFromCart = (recipeId) => ({
    type: 'REMOVE_FROM_CART',
    payload: recipeId,
  });


//for favourites
export const toggleFavorite = (recipe) => {
  return {
    type: 'TOGGLE_FAVORITE',
    payload: recipe,
  };
};

export const removeFav = (recipeId) => {
  return {
    type: 'REMOVE_RECIPE',
    payload: recipeId,
  }
}


  