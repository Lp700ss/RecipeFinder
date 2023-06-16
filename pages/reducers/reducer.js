import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [
    { id: 1, name: 'Vegetable Curry', type: 'Veg', taste: 'Spicy' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast'},
    { id: 2, name: 'Chicken Biryani', type: 'Non-Veg', taste: 'Spicy' , bySeason: 'Winter', byDietaryPreference: 'Heavy', byMeal: 'Breakfast'},
    { id: 3, name: 'Vegan Salad', type: 'Vegan', taste: 'Sweet and Sour' , bySeason: 'Summer', byDietaryPreference: 'Egg-Free', byMeal: 'Breakfast'},
    { id: 4, name: 'Chocolate Cake', type: 'Sweet', taste: 'Sweet' , bySeason: 'Spring', byDietaryPreference: 'Fast-Food', byMeal: 'Breakfast'},
    { id: 5, name: 'French Fries', type: 'Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'UnHealthy', byMeal: 'Breakfast'},
    { id: 6, name: 'Paneer Tikka Masala', type: 'Veg', taste: 'Spicy' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Dinner'},
    { id: 7, name: 'Fish Tacos', type: 'Non-Veg', taste: 'Spicy' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Dinner'},
    { id: 8, name: 'Chickpea Curry', type: 'Vegan', taste: 'Spicy' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Dinner'},
    { id: 9, name: 'Vanilla Cupcakes', type: 'Sweet', taste: 'Sweet' , bySeason: 'Spring', byDietaryPreference: 'Fast-Food', byMeal: 'Dinner'},
    { id: 10, name: 'Katla Kalia', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Healthy', byMeal: 'Dinner'},
    { id: 11, name: 'Dahi Katla', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner'},
    { id: 12, name: 'Katla Coriander', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner'},
    { id: 13, name: 'Rui Posto', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner'},
    { id: 14, name: 'Rui Macher Jhal', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner'},
    { id: 15, name: 'Bhetki Fish Fry', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner'},
    { id: 16, name: 'Bhetki Butter Fry', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Holidays'},
    { id: 17, name: 'Bhetki Paturi', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Holidays'},
    { id: 18, name: 'Fish Roll', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Healthy', byMeal: 'Holidays'},
    { id: 19, name: 'Grilled Bhetki', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays'},
    { id: 20, name: 'Fish Kabiraji', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays'},
    { id: 21, name: 'Fish Cutlet', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays'},
    { id: 22, name: 'Bhetki Macher Tel Jhal', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays'},
    { id: 23, name: 'Shorshe Pabda', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays'},
    { id: 24, name: 'Pabdar Tel Jhal', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays'},
    { id: 25, name: 'Parshe Macher Jhol', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays'},
    { id: 26, name: 'Fish Orly', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays'},
    { id: 27, name: 'Ilish Bhapa', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays'},
    { id: 28, name: 'Shorshe Ilish', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays'},
    { id: 29, name: 'Doi Ilish', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays'},
    { id: 30, name: 'Chingri Macher Malai Curry', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch'},
    { id: 31, name: 'Daab Chingri', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch'},
    { id: 32, name: 'Prawn Cutlet', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch'},
    { id: 33, name: 'Prawn Masala', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch'},
    { id: 34, name: 'Guacamole', type: 'Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch'},
    { id: 35, name: 'Deep-fried avocado', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch'},
    { id: 36, name: 'Avocado tomato salad', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch'},
    { id: 37, name: 'Avocado sauce', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch'},
    { id: 38, name: 'Avocado egg salad', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner'},
    { id: 39, name: 'Shrimp Avocado Salad', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner'},
    { id: 40, name: 'Avocado cookie', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner'},
    { id: 41, name: 'Avocado tuna salad', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner'},
    { id: 42, name: 'Avocado quesadillas', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner'},
    { id: 43, name: 'Avocado smoothie', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Breakfast'},
    { id: 44, name: 'Aloo shimla mirch', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Breakfast'},
    { id: 45, name: 'Amriti with rabdi', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Breakfast'},
    { id: 46, name: 'Biryani', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast'},
    { id: 47, name: 'Chaat', type: 'Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast'},
    { id: 48, name: 'Chapati', type: 'Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast'},
    { id: 49, name: 'Chicken Tikka', type: 'Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast'},
    { id: 50, name: 'Chole bhature', type: 'Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast'},
    { id: 51, name: 'Dum aloo', type: 'Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast'},
    { id: 52, name: 'Poha', type: 'Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast'},
  ],
  cart: [], 
  fav: [],
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});
const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    toggleFavorite: (state,action) => {
      state.fav.push(action.payload);
    },
    removeFav: (state,action) => {
      state.fav = state.fav.filter((item) => item.id !== action.payload);
    }
  },
});

export const { addToCart, removeFromCart} = recipeSlice.actions;
export const { toggleFavorite, removeFav } = favSlice.actions;

export const reducer1 = recipeSlice.reducer;
export const reducer2 = favSlice.reducer;

 export default {
  reducer1 ,
  reducer2
 };

