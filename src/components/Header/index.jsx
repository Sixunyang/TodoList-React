import React, { useState } from "react";
import "./index.css";

export default function Header(props) {
  const { updateTodos } = props;
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleClick = () => {
    if (inputText.trim() !== "") {
      updateTodos({
        id: Date.now().toString(),
        name: inputText,
        done: false,
      });
      setInputText("");
    } else {
      alert("do something");
      setInputText("");
    }
  };
  return (
    <div className="header">
      <div className="input">
        <input type="text" onChange={handleChange} value={inputText} />
      </div>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

/* import React, { Component } from "react";
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
        <div className="input">
          <input type="text" onKeyUp={this.handleKeyUp} />
        </div>
        <button>+</button>
      </div>
    );
  }
} */
