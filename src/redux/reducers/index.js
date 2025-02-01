import { combineReducers } from "redux";

import { recipeReducer, recipeDetailsReducer } from "./recipeReducer";
import { likedRecipesReducer } from "./LikedReducer";

const reducers = combineReducers({
  recipes: recipeReducer,
  details: recipeDetailsReducer,
  likedRecipes: likedRecipesReducer,
});

export default reducers;
