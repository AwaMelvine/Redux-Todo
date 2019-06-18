import React, { Component } from "react";

export default class TodoForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input name="value" type="text" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
