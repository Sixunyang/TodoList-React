import React from "react";
import "./App.css";
import Title from "./components/Title";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
class App extends React.Component {
  state = {
    todos: [
      { id: "1", name: "debug", done: true },
      { id: "2", name: "learn", done: false },
      { id: "3", name: "make food", done: false },
    ],
  };
  updateTodos = (OBJ) => {
    console.log(OBJ);
    let newTodos = [OBJ, ...this.state.todos];
    this.setState({ todos: newTodos });
  };
  deleteTodo = (id) => {
    console.log(id);
    let newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  };
  getTrueOrFalse = (bl) => {
    let newTodo = this.state.todos.map((todo) => {
      if (todo.id === bl.id) {
        todo.done = bl.done;
      }
      return todo;
    });

    this.setState({ todos: newTodo });
  };
  clearAllDone = () => {
    let newTodos = this.state.todos.filter((todo) => !todo.done);
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="main">
        <div className="container">
          <Title />
          <Header updateTodos={this.updateTodos} />
          <List
            todos={todos}
            deleteTodo={this.deleteTodo}
            getTrueOrFalse={this.getTrueOrFalse}
          />
          <Footer todos={todos} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    );
  }
}

export default App;
