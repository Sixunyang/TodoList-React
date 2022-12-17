import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  handleDelete = (id) => {
    console.log(id);
    this.props.deleteTodo(id);
  };
  handleChange = (e) => {
    this.props.getTrueOrFalse({ id: e.target.id, done: e.target.checked });
  };
  render() {
    const { id, name, done } = this.props;
    return (
      <div className="item">
        <input
          type="checkbox"
          name=""
          id={id}
          defaultChecked={done}
          onChange={this.handleChange}
        />
        <div className="content">{name}</div>
        <i
          className="bi bi-trash3"
          style={{ color: "rgb(45, 98, 158)", cursor: "pointer" }}
          onClick={() => {
            this.handleDelete(id);
          }}
        ></i>
      </div>
    );
  }
}
