import { ADD_LIKED_RECIPE, REMOVE_LIKED_RECIPE } from "../actions/LikedAction";

// Action to add a liked recipe
export const addLikedRecipe = (recipe) => ({
  type: ADD_LIKED_RECIPE,
  payload: recipe
});

// Action to remove a liked recipe
export const removeLikedRecipe = (recipe) => ({
  type: REMOVE_LIKED_RECIPE,
  payload: recipe
});
