import React, { Component } from "react";
import "./index.css";
export default class Header extends Component {
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value.trim() !== "") {
        this.props.updateTodos({
          id: Date.now().toString(),
          name: e.target.value,
          done: false,
        });
        e.target.value = "";
      } else {
        alert("do something");
        e.target.value = "";
      }
    }
  };
  render() {
    return (
      <div className="header">
        <div className="input" onKeyUp={this.handleKeyUp}>
          <input type="text" />
        </div>
        <button>+</button>
      </div>
    );
  }
}
