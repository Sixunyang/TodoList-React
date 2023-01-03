import React from "react";
import "./index.css";

export default function Footer(props) {
  const { todos, clearAllDone } = props;

  let finishedTodo = todos.filter((todo) => todo.done === true);

  const handleClearAllDone = () => {
    clearAllDone();
  };

  return (
    <div className="footer">
      <div className="left-box">
        {finishedTodo.length} of {todos.length} tasks done
      </div>
      <div className="right-box" onClick={handleClearAllDone}>
        Removed checked
      </div>
    </div>
  );
}

/* import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };
  render() {
    let todos = this.props.todos;
    let finishedTodo = todos.filter((todo) => todo.done === true);

    return (
      <div className="footer">
        <div className="left-box">
          {finishedTodo.length} of {todos.length} tasks done
        </div>
        <div className="right-box" onClick={this.handleClearAllDone}>
          Removed checked
        </div>
      </div>
    );
  }
} */
