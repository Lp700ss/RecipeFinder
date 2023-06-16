import { configureStore } from '@reduxjs/toolkit';
import {reducer1, reducer2 } from '../../pages/reducers/reducer';
import { combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
  reducer: {
    recipes: reducer1,
    fav: reducer2,
  },
});

const store = configureStore({
  reducer: rootReducer,
});


export default store;
