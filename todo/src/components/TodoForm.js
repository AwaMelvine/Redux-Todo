import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

class TodoForm extends Component {
  state = {
    value: ""
  };
  submit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <form onSubmit={event => this.submit(event)}>
          <input
            type="text"
            name="value"
            value={value}
            onChange={event => this.setState({ value: event.target.value })}
            placeholder="Add task..."
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { addTodo }
)(TodoForm);
