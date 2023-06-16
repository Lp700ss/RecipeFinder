import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../pages/reducers/reducer';
import { toggleFavorite, removeFav } from '../../pages/reducers/reducer';

const RecipeApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    bySeason: '',
    byDietaryPreference: '',
    byMeal: '',
    byTaste: '',
  });
  const recipes = useSelector((state) => state.reducer1.recipes);
  const cartItems = useSelector((state) => state.reducer1.cart);
  const favItems = useSelector((state) => state.reducer2.fav);
  const dispatch = useDispatch();

  const filteredRecipes = recipes.filter((recipe) => {
    const matchSearchTerm = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilterType = filterType ? recipe.type === filterType : true;
    const matchFilterOptions =
      (filterOptions.bySeason ? recipe.bySeason === filterOptions.bySeason : true) &&
      (filterOptions.byDietaryPreference
        ? recipe.byDietaryPreference === filterOptions.byDietaryPreference
        : true) &&
      (filterOptions.byMeal ? recipe.byMeal === filterOptions.byMeal : true) &&
      (filterOptions.byTaste ? recipe.taste === filterOptions.byTaste : true);
    return matchSearchTerm && matchFilterType && matchFilterOptions;
  });

  const handleAddToCart = (recipe) => {
    dispatch(addToCart(recipe));
  };

  const handleRemoveFromCart = (recipe) => {
    dispatch(removeFromCart(recipe.id));
  };

  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const handleToggleFavorite = (recipe) => {
    dispatch(toggleFavorite(recipe));
  };

  const favoriteRecipes = favItems;

  const handleFilterOptionChange = (option, value) => {
    setFilterOptions((prevOptions) => ({ ...prevOptions, [option]: value }));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="">All</option>
          <option value="Veg">Vegetarian</option>
          <option value="Non-Veg">Non-Vegetarian</option>
          <option value="Vegan">Vegan</option>
        </select>

        <button onClick={handleToggleFavorites}>
          {showFavorites ? 'All Recipes' : 'Favorites'}
        </button>
      </div>

      <div>
        <h3>Filter Options</h3>
        <div>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.bySeason === 'autumn'}
              onChange={(e) =>
                handleFilterOptionChange('bySeason', e.target.checked ? 'autumn' : '')
              }
            />
            Autumn
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.bySeason === 'spring'}
              onChange={(e) =>
                handleFilterOptionChange('bySeason', e.target.checked ? 'spring' : '')
              }
            />
            Spring
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.bySeason === 'summer'}
              onChange={(e) =>
                handleFilterOptionChange('bySeason', e.target.checked ? 'summer' : '')
              }
            />
            Summer
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.bySeason === 'winter'}
              onChange={(e) =>
                handleFilterOptionChange('bySeason', e.target.checked ? 'winter' : '')
              }
            />
            Winter
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.byDietaryPreference === 'Dairy-Free'}
              onChange={(e) =>
                handleFilterOptionChange(
                  'byDietaryPreference',
                  e.target.checked ? 'Dairy-Free' : ''
                )
              }
            />
            Dairy-Free
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.byDietaryPreference === 'Egg-Free'}
              onChange={(e) =>
                handleFilterOptionChange('byDietaryPreference', e.target.checked ? 'Egg-Free' : '')
              }
            />
            Egg-Free
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.byDietaryPreference === 'Gluten-Free'}
              onChange={(e) =>
                handleFilterOptionChange(
                  'byDietaryPreference',
                  e.target.checked ? 'Gluten-Free' : ''
                )
              }
            />
            Gluten-Free
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.byDietaryPreference === 'Healthy'}
              onChange={(e) =>
                handleFilterOptionChange('byDietaryPreference', e.target.checked ? 'Healthy' : '')
              }
            />
            Healthy
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.byMeal === 'Breakfast'}
              onChange={(e) =>
                handleFilterOptionChange('byMeal', e.target.checked ? 'Breakfast' : '')
              }
            />
            Breakfast
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.byMeal === 'Dessert'}
              onChange={(e) =>
                handleFilterOptionChange('byMeal', e.target.checked ? 'Dessert' : '')
              }
            />
            Dessert
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.byMeal === 'Dinner'}
              onChange={(e) =>
                handleFilterOptionChange('byMeal', e.target.checked ? 'Dinner' : '')
              }
            />
            Dinner
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.byMeal === 'Lunch'}
              onChange={(e) =>
                handleFilterOptionChange('byMeal', e.target.checked ? 'Lunch' : '')
              }
            />
            Lunch
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.byTaste === 'Sweet'}
              onChange={(e) =>
                handleFilterOptionChange('byTaste', e.target.checked ? 'Sweet' : '')
              }
            />
            Sweet
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.byTaste === 'Salty'}
              onChange={(e) =>
                handleFilterOptionChange('byTaste', e.target.checked ? 'Salty' : '')
              }
            />
            Salty
          </label>
        </div>
      </div>

      <div className='container'>
        {showFavorites
          ? favoriteRecipes.map((recipe) => (
            <div className='row'>
              <div className='col-sm' key={recipe.id}>
                <div className='col-sm'>
                <h3>{recipe.name}</h3>
                <p>Type: {recipe.type}</p>
                <p>Taste: {recipe.taste}</p>
                </div>
                {/* <button onClick={() => handleToggleFavorite(recipe)}>
                  Remove from Favorites
                </button> */}
              </div>
              </div>
            ))
          : filteredRecipes.map((recipe) => (
              <div className='row' key={recipe.id}>
                   <div className='col'>
                <h3>{recipe.name}</h3>
                <p>Type: {recipe.type}</p>
                <p>Taste: {recipe.taste}</p>
                </div>
                <button onClick={() => handleAddToCart(recipe)}>Add to Cart</button>
                <button onClick={() => handleToggleFavorite(recipe)}>Add to Favorites</button>
              </div>
            ))}
      </div>

      <h2>Cart</h2>
      <p>Total Items: {cartItems.length}</p>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeApp;
