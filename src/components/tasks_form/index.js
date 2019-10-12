import React from "react";
import Button from "../buttons/button";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from "../../actions";
import * as dateFns from "date-fns";

class TasksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleSave(){
    let day_string = dateFns.format(this.props.date, 'dd-MM-yyyy')
    this.props.addTask(day_string, {content: this.state.value})
    alert('Task added')
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <textarea class='task-input' rows='10' placeholder="Event description ..." value={this.state.value} onChange={this.handleChange.bind(this)}/>
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

const mapStateToProps = function(state) {
  return {
    calendar: state.calendar,
    date: state.date
  }
}

export default connect(mapStateToProps, actions)(TasksForm);
