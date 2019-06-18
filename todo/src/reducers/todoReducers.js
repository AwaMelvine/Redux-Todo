import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case TOGGLE_COMPLETE:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });

    default:
      return state;
  }
};
