import { ADD_TODO, TOGGLE_COMPLETE } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

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
