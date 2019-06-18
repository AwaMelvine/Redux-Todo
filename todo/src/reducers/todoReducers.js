import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from "../actions/types";
import { saveState, loadState } from "../db/localStorage";
const initialState = loadState();

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      saveState([...state, action.payload]);
      return [...state, action.payload];
    case DELETE_TODO:
      const newTodos = state.filter(todo => todo.id !== action.payload);
      saveState(newTodos);
      return newTodos;
    case TOGGLE_COMPLETE:
      const updatedTodos = state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
      saveState(updatedTodos);
      return updatedTodos;

    default:
      return state;
  }
};
