import React from "react";
import _ from "lodash";
import "./App.css";
import Header from "./Components/Header/Header";
import CreateTask from "./Components/Task_Display/Create_New_Task";
import TodosList from "./Components/Task_Display/Task_Display";

const todos = [
  {
    task: "wash dishes",
    description: "",
    isCompleted: false
  },
  {
    task: "buy groceries",
    description: "eggs, milk, peanuts",
    isCompleted: true
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div id="app" className="App">
        <Header />
        <CreateTask
          todos={this.state.todos}
          createTask={this.createTask.bind(this)}
          setReminder={this.setReminder.bind(this)}
        />

        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          createTask={this.createTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
          setReminder={this.setReminder.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  createTask(task) {
    this.state.todos.push({ task, isCompleted: false });
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }

  setReminder(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    setTimeout(function() {
      alert("DON'T FORGET TO " + { foundTodo } + ".");
    }, 5000);
    // this.setState({ todos: this.state.todos });
  }
}

export default App;
