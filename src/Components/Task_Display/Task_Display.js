import React from "react";
import _ from "lodash";
import "./Task_Display.css";
import TodosListItem from "./Task_Display_Item";

class TodosList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, "todos");
    return _.map(this.props.todos, (todo, index) => (
      <TodosListItem key={index} {...todo} {...props} />
    ));
  }

  render() {
    return (
      <table>
        <thead />
        <tbody>{this.renderItems()}</tbody>
      </table>
    );
  }
}

export default TodosList;
