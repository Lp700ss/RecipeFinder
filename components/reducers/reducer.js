import { createSlice } from '@reduxjs/toolkit';






const initialState = {
  recipes: [
    { id: 1, name: 'Vegetable Curry', type: 'Veg', taste: 'Spicy' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast', image:"/3.jpg"},
    { id: 2, name: 'Chicken Biryani', type: 'Non-Veg', taste: 'Spicy' , bySeason: 'Winter', byDietaryPreference: 'Heavy', byMeal: 'Breakfast',image: "/4.jpg"},
    { id: 3, name: 'Vegan Salad', type: 'Vegan', taste: 'Sweet and Sour' , bySeason: 'Summer', byDietaryPreference: 'Egg-Free', byMeal: 'Breakfast',image: "/5.jpg"},
    { id: 4, name: 'Chocolate Cake', type: 'Sweet', taste: 'Sweet' , bySeason: 'Spring', byDietaryPreference: 'Fast-Food', byMeal: 'Breakfast',image: "/6.jpg"},
    { id: 5, name: 'French Fries', type: 'Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'UnHealthy', byMeal: 'Breakfast',image: "/7.jpg"},
    { id: 6, name: 'Paneer Tikka Masala', type: 'Veg', taste: 'Spicy' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Dinner',image: "/8.jpg"},
    { id: 7, name: 'Fish Tacos', type: 'Non-Veg', taste: 'Spicy' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Dinner',image: "/9.jpg"},
    { id: 8, name: 'Chickpea Curry', type: 'Vegan', taste: 'Spicy' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Dinner',image: "/10.jpg"},
    { id: 9, name: 'Vanilla Cupcakes', type: 'Sweet', taste: 'Sweet' , bySeason: 'Spring', byDietaryPreference: 'Fast-Food', byMeal: 'Dinner',image: "/11.jpg"},
    { id: 10, name: 'Katla Kalia', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Healthy', byMeal: 'Dinner',image: "/12.jpg"},
    { id: 11, name: 'Dahi Katla', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner',image: "/13.jpg"},
    { id: 12, name: 'Katla Coriander', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner',image: "/14.jpg"},
    { id: 13, name: 'Rui Posto', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner',image: "/15.jpg"},
    { id: 14, name: 'Rui Macher Jhal', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner',image: "/16.jpg"},
    { id: 15, name: 'Bhetki Fish Fry', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner',image: "/17.jpg"},
    { id: 16, name: 'Bhetki Butter Fry', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Holidays',image: "/18.jpg"},
    { id: 17, name: 'Bhetki Paturi', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Holidays',image: "/19.jpg"},
    { id: 18, name: 'Fish Roll', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Healthy', byMeal: 'Holidays',image: "/20.jpg"},
    { id: 19, name: 'Grilled Bhetki', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays',image: "/21.jpg"},
    { id: 20, name: 'Fish Kabiraji', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays',image: "/22.jpg"},
    { id: 21, name: 'Fish Cutlet', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays',image: "/23.jpg"},
    { id: 22, name: 'Bhetki Macher Tel Jhal', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays',image: "/24.jpg"},
    { id: 23, name: 'Shorshe Pabda', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays',image: "/25.jpg"},
    { id: 24, name: 'Pabdar Tel Jhal', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Winter', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays',image: "/26.jpg"},
    { id: 25, name: 'Parshe Macher Jhol', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays',image: "/27.jpg"},
    { id: 26, name: 'Fish Orly', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays',image: "/28.jpg"},
    { id: 27, name: 'Ilish Bhapa', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays',image: "/29.jpg"},
    { id: 28, name: 'Shorshe Ilish', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays',image: "/30.jpg"},
    { id: 29, name: 'Doi Ilish', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Egg-Free', byMeal: 'Holidays',image: "/40.jpg"},
    { id: 30, name: 'Chingri Macher Malai Curry', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch',image: "/41.jpg"},
    { id: 31, name: 'Daab Chingri', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch',image: "/42.jpg"},
    { id: 32, name: 'Prawn Cutlet', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch',image: "/43.jpg"},
    { id: 33, name: 'Prawn Masala', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch',image: "/44.jpg"},
    { id: 34, name: 'Guacamole', type: 'Veg', taste: 'Salty' , bySeason: 'Spring', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch',image: "/45.jpg"},
    { id: 35, name: 'Deep-fried avocado', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch',image: "/47.jpg"},
    { id: 36, name: 'Avocado tomato salad', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch',image: "/48.jpg"},
    { id: 37, name: 'Avocado sauce', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Dairy-Free', byMeal: 'Lunch',image: "/49.jpg"},
    { id: 38, name: 'Avocado egg salad', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner',image: "/50.jpg"},
    { id: 39, name: 'Shrimp Avocado Salad', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner',image: "/51.jpg"},
    { id: 40, name: 'Avocado cookie', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner',image: "/31.jpg"},
    { id: 41, name: 'Avocado tuna salad', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner',image: "/32.jpg"},
    { id: 42, name: 'Avocado quesadillas', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Dinner',image: "/33.jpg"},
    { id: 43, name: 'Avocado smoothie', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Breakfast',image: "/34.jpg"},
    { id: 44, name: 'Aloo shimla mirch', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Breakfast',image: "/35.jpg"},
    { id: 45, name: 'Amriti with rabdi', type: 'Veg', taste: 'Salty' , bySeason: 'Summer', byDietaryPreference: 'Healthy', byMeal: 'Breakfast',image: "/36.jpg"},
    { id: 46, name: 'Biryani', type: 'Non-Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast',image: "/37.jpg"},
    { id: 47, name: 'Chaat', type: 'Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast',image: "/38.jpg"},
    { id: 48, name: 'Chapati', type: 'Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast',image: "/39.jpg"},
    { id: 49, name: 'Chicken Tikka', type: 'Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast',image: "/46.jpg"},
    { id: 50, name: 'Chole bhature', type: 'Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast',image: "/52.jpg"},
    { id: 51, name: 'Dum aloo', type: 'Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast',image: "/55.jpg"},
    { id: 52, name: 'Poha', type: 'Veg', taste: 'Salty' , bySeason: 'Autumn', byDietaryPreference: 'Healthy', byMeal: 'Breakfast',image: "/54.jpg"},
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

