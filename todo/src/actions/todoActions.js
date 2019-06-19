import uuid from "uuid";
import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from "./types";

export const addTodo = value => ({
  type: ADD_TODO,
  payload: {
    value,
    completed: false,
    id: uuid()
  }
});

export const toggleComplete = id => ({
  type: TOGGLE_COMPLETE,
  payload: id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
});
