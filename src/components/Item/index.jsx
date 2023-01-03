import React, { useState, useEffect } from "react";
import "./index.css";

export default function Item(props) {
  const [item, setItem] = useState("item");
  const [progress, setProgress] = useState("0");
  const [flag, setFlag] = useState(false);

  const { id, name, done, deleteTodo, getTrueOrFalse } = props;

  useEffect(() => {
    if (flag) {
      var timer = setTimeout(() => {
        if (parseInt(progress) === 575) {
          alert("Congratuation!");
          clearTimeout(timer);
        } else {
          setProgress(parseInt(progress) + 1 + "px");
        }
      }, 2608);
    }
  }, [progress, flag]);

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleChange = (e) => {
    getTrueOrFalse({ id: e.target.id, done: e.target.checked });
    if (item === "item") {
      setItem("item active");
    } else {
      setItem("item");
    }
  };

  const handleTimer = () => {
    if (progress === "0") {
      alert("Start!");
      setFlag(true);
    } else {
      if (flag) {
        alert("pause item?");
        setFlag(false);
      } else {
        alert("continue item?");
        setFlag(true);
      }
    }
  };

  return (
    <div className={item}>
      <div className="item2" style={{ width: progress }}></div>
      <input
        type="checkbox"
        name=""
        id={id}
        defaultChecked={done}
        onChange={handleChange}
      />
      <div className="content" onClick={handleTimer}>
        {name}
      </div>
      <i
        className="bi bi-trash3"
        style={{ color: "rgb(0,0,0)", cursor: "pointer", zIndex: 999 }}
        onClick={() => {
          handleDelete(id);
        }}
      ></i>
    </div>
  );
}

/* import React, { Component } from "react";
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
} */
