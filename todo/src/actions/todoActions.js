import uuid from "uuid";
import { ADD_TODO, TOGGLE_COMPLETE } from "./types";

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
