import { actions } from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case actions.removeFavorite:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case actions.loginRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.logoutRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.registerRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.getVideoSource:
      return {
        ...state,
        playing: state.trends
          .concat(state.original)
          .find((item) => item.id === Number(action.payload) || []),
      };
    default:
      return state;
  }
};

export default reducer;
