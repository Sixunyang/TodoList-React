import React, { Component } from "react";
import Item from "../Item";
import "./index.css";
export default class List extends Component {
  render() {
    const { todos, deleteTodo } = this.props;

    return (
      <div className="list">
        {todos.map((todo) => (
          <Item
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            getTrueOrFalse={this.props.getTrueOrFalse}
          />
        ))}
      </div>
    );
  }
}
