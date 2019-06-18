import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleComplete } from "../actions/todoActions";
const completed = {
  textDecoration: "line-through"
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
      </li>
    );
  }
}

export default connect(
  null,
  { toggleComplete }
)(Todo);
