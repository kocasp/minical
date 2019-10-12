import React from "react";
import Button from "../buttons/button";
import { NavLink } from "react-router-dom";

class TasksForm extends React.Component {

  handleSave(){
    // alert('Hello')
  }

  render() {
    return (
      <div>
        <textarea class='task-input' rows='10' placeholder="Event description ..."/>
        <br/>
        <NavLink to="/home">
          <Button type="light">
            Cancel
          </Button>
        </NavLink>
        <NavLink to="/home">
          <Button type="primary" onClick={this.handleSave.bind(this)}>
            Save
          </Button>
        </NavLink>
      </div>
    )
  }

}

export default TasksForm;
