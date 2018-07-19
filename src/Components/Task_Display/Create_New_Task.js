import React from "react";
import _ from "lodash";
import "./Create_New_Task.css";

class CreateTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }
  renderError() {
    if (!this.state.error) {
      return null;
    }
    return <div style={{ color: "red" }}>{this.state.error}</div>;
  }

  render() {
    return (
      <form id="inputForm" onSubmit={this.createTaskHandler.bind(this)}>
        <input type="text" placeholder="TITLE" ref="createInputTitle" />
        <input
          type="text"
          placeholder="DESCRIPTION"
          ref="createInputDescription"
        />
        <button className="btn btn-secondary">ADD TO MY LIST</button>
        {this.renderError()}
      </form>
    );
  }
  createTaskHandler(event) {
    event.preventDefault();

    const createInputTitle = this.refs.createInputTitle;
    const createInputDescription = this.refs.createInputDescription;
    const task = createInputTitle.value + ": " + createInputDescription.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInputTitle.value = "";
    this.refs.createInputDescription.value = "";
  }

  validateInput(task) {
    if (!task) {
      return "YOU FORGOT TO ENTER YOUR TASK";
    } else if (_.find(this.props.todos, todo => todo.task === task)) {
      return "DON'T WORRY, THAT'S ALREADY ON YOUR LIST";
    } else {
      return null;
    }
  }
}

export default CreateTask;
