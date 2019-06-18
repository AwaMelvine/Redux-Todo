import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo />
        ))}
      </ul>
    );
  }
}
export default TodoList;
