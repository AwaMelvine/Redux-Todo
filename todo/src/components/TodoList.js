import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todo-list">
        {todos.map(todo => (
          <Todo />
        ))}
      </div>
    );
  }
}
export default TodoList;
