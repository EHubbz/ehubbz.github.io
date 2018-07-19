import React from "react";
import _ from "lodash";
import "./Task_Display";
import "./Task_Display_Item.css";

class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button
            className="btn btn-secondary"
            onClick={this.onSaveClick.bind(this)}
          >
            SAVE
          </button>
          <button
            className="btn btn-secondary"
            onClick={this.onCancelHandler.bind(this)}
          >
            CANCEL
          </button>
          <hr />
        </td>
      );
    }
    return (
      <td>
        <button
          className="btn btn-secondary"
          onClick={this.onEditClick.bind(this)}
        >
          EDIT
        </button>
        <button
          className="btn btn-secondary"
          onClick={this.props.deleteTask.bind(
            this,
            this.props.task,
            this.props.description
          )}
        >
          DELETE
        </button>
        <button
          className="btn btn-secondary"
          onClick={this.props.setReminder.bind(this, this.props.task)}
        >
          REMIND ME
        </button>
        {/* <hr /> */}
      </td>
    );
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;
    const taskStyle = {
      textDecoration: isCompleted ? "line-through" : "none",
      cursor: "pointer"
    };

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editedInputTitle" />
            {/* <input
              type="text"
              defaultValue={description}
              ref="editedInputDescription"
            /> */}
          </form>
        </td>
      );
    }

    return (
      <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
        {task}
      </td>
    );
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionSection()}
        {/* <hr /> */}
      </tr>
    );
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelHandler() {
    this.setState({ isEditing: false });
  }

  onSaveClick(event) {
    event.preventDefault();
    const oldTask = this.props.task;
    const createTask = this.refs.editedInputTitle.value;
    this.props.saveTask(oldTask, createTask);
    this.setState({ isEditing: false });
  }

  saveTask(oldTask, createTask) {
    const foundTodo = _.find(this.state.todos, task => task.task === oldTask);
    oldTask = createTask;
    this.setState({ todos: this.state.todos });
  }
}

export default TodosListItem;
