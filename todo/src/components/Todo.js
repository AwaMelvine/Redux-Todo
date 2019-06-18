import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleComplete, deleteTodo } from "../actions/todoActions";
const completed = {
  textDecoration: "line-through"
};

const del = {
  color: "red",
  marginLeft: 20,
  cursor: "pointer"
};

class Todo extends Component {
  render() {
    const { todo } = this.props;
    return (
      <li
        onClick={() => this.props.toggleComplete(todo.id)}
        style={todo.completed ? completed : {}}
      >
        {todo.value}
        <span style={del} onClick={() => this.props.deleteTodo(todo.id)}>
          x
        </span>
      </li>
    );
  }
}

export default connect(
  null,
  { toggleComplete, deleteTodo }
)(Todo);
