import { ADD_LIKED_RECIPE, REMOVE_LIKED_RECIPE } from "../actions/LikedAction";

const initialState = {
  likedRecipes: []
};

export const likedRecipesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_LIKED_RECIPE:
      return { ...state, likedRecipes: [...state.likedRecipes, payload] };
    case REMOVE_LIKED_RECIPE:
      return {
        ...state,
        likedRecipes: state.likedRecipes.filter(recipe => recipe.idMeal !== payload.idMeal)
      };
    default:
      return state;
  }
};
