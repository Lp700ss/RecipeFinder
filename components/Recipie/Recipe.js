import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../reducers/reducer';
import { toggleFavorite, removeFav } from '../reducers/reducer';
import Image from 'next/image'



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
    console.log(recipe.image);
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
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">All</option>
            <option value="Veg">Vegetarian</option>
            <option value="Non-Veg">Non-Vegetarian</option>
            <option value="Vegan">Vegan</option>
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={handleToggleFavorites}>
            {showFavorites ? 'All Recipes' : 'Favorites'}
          </button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-3">
          <h3>Filter Options</h3>
          <div>
          <h4>By Season</h4>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.bySeason === 'autumn'}
                onChange={(e) =>
                  handleFilterOptionChange('bySeason', e.target.checked ? 'autumn' : '')
                }
              />
               <span className="checkbox-custom"></span>
              Autumn
            </label>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.bySeason === 'spring'}
                onChange={(e) =>
                  handleFilterOptionChange('bySeason', e.target.checked ? 'spring' : '')
                }
              />
               <span className="checkbox-custom"></span>
              Spring
            </label>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.bySeason === 'summer'}
                onChange={(e) =>
                  handleFilterOptionChange('bySeason', e.target.checked ? 'summer' : '')
                }
              /> <span className="checkbox-custom"></span>
              Summer
            </label>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.bySeason === 'winter'}
                onChange={(e) =>
                  handleFilterOptionChange('bySeason', e.target.checked ? 'winter' : '')
                }
              /> <span className="checkbox-custom"></span>
              Winter
            </label>
          </div>
          <div className="mt-4">
            <h4>By Dietary Preference</h4>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.byDietaryPreference === 'Dairy-Free'}
                onChange={(e) =>
                  handleFilterOptionChange(
                    'byDietaryPreference',
                    e.target.checked ? 'Dairy-Free' : ''
                  )
                }
              /> <span className="checkbox-custom"></span>
              Dairy-Free
            </label>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.byDietaryPreference === 'Egg-Free'}
                onChange={(e) =>
                  handleFilterOptionChange('byDietaryPreference', e.target.checked ? 'Egg-Free' : '')
                }
              /> <span className="checkbox-custom"></span>
              Egg-Free
            </label>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.byDietaryPreference === 'Gluten-Free'}
                onChange={(e) =>
                  handleFilterOptionChange(
                    'byDietaryPreference',
                    e.target.checked ? 'Gluten-Free' : ''
                  )
                }
              /> <span className="checkbox-custom"></span>
              Gluten-Free
            </label>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.byDietaryPreference === 'Healthy'}
                onChange={(e) =>
                  handleFilterOptionChange('byDietaryPreference', e.target.checked ? 'Healthy' : '')
                }
              /> <span className="checkbox-custom"></span>
              Healthy
            </label>
          </div>
          <div className="mt-4">
            <h4>By Meal</h4>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.byMeal === 'Breakfast'}
                onChange={(e) =>
                  handleFilterOptionChange('byMeal', e.target.checked ? 'Breakfast' : '')
                }
              /> <span className="checkbox-custom"></span>
              Breakfast
            </label>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.byMeal === 'Dessert'}
                onChange={(e) =>
                  handleFilterOptionChange('byMeal', e.target.checked ? 'Dessert' : '')
                }
              /> <span className="checkbox-custom"></span>
              Dessert
            </label>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.byMeal === 'Dinner'}
                onChange={(e) =>
                  handleFilterOptionChange('byMeal', e.target.checked ? 'Dinner' : '')
                }
              /> <span className="checkbox-custom"></span>
              Dinner
            </label>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.byMeal === 'Lunch'}
                onChange={(e) =>
                  handleFilterOptionChange('byMeal', e.target.checked ? 'Lunch' : '')
                }
              /> <span className="checkbox-custom"></span>
              Lunch
            </label>
          </div>
          <div className="mt-4">
            <h4>By Taste</h4>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.byTaste === 'Sweet'}
                onChange={(e) =>
                  handleFilterOptionChange('byTaste', e.target.checked ? 'Sweet' : '')
                }
              /> <span className="checkbox-custom"></span>
              Sweet
            </label>
          <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filterOptions.byTaste === 'Salty'}
                onChange={(e) =>
                  handleFilterOptionChange('byTaste', e.target.checked ? 'Salty' : '')
                }
              /> <span className="checkbox-custom"></span>
              Salty
            </label>
          </div>
          
          <div className="row">
  <div className="col-md-6">
    <h2 className="mb-3">Search Titles :</h2>
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <div className="card" style={{ width: '200px', padding: '10px' }}>
  <div className="card-header">
    <h2 className="card-title pt-4">Cart :</h2>
  </div>
  <div className="card-body pt-3">
    <p className="card-text">Total Items: {cartItems.length}</p>
    {cartItems.length === 0 ? (
      <p className="card-text">Cart is empty</p>
    ) : (
      <ul className="list-group">
        {cartItems.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.name}{' '}
            <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
</div>



  </div>
</div>

        </div>
        <div className="col-md-9">
  <div className="row row-cols-3 g-4">
    {showFavorites
      ? favoriteRecipes.map((recipe) => (
          <div className="col" key={recipe.id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{recipe.name}</h3>
                <p className="card-text">Type: {recipe.type}</p>
                <p className="card-text">Taste: {recipe.taste}</p>
              </div>
            </div>
          </div>
        ))
      : filteredRecipes.map((recipe) => (
          <div className="col" key={recipe.id}>
            <div className="card">
              <Image
                src={recipe.image}
                alt={recipe.name}
                layout="responsive"
                width={300}
                height={200}
                objectFit="cover"
                objectPosition="center"
                className="card-img-top rounded-top"
              />
              <div className="card-body">
                <h3 className="card-title">{recipe.name}</h3>
                <p className="card-text">Type: {recipe.type}</p>
                <p className="card-text">Taste: {recipe.taste}</p>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(recipe)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-secondary mt-2"
                    onClick={() => handleToggleFavorite(recipe)}
                  >
                    Add to Favorites
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
  </div>
</div>

      </div>

   
    </div>
  );
};

export default RecipeApp;
