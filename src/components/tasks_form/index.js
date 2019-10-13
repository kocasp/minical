import React from "react";
import Button from "../buttons/button";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from "../../actions";
import * as dateFns from "date-fns";
import { Dropdown } from 'semantic-ui-react'

const colorOptions = [
  {
    key: 'Default',
    text: 'Default',
    value: 'orange',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    key: 'Blue',
    text: 'Blue',
    value: 'blue',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Green',
    text: 'Green',
    value: 'green',
    label: { color: 'green', empty: true, circular: true },
  },
  {
    key: 'Red',
    text: 'Red',
    value: 'red',
    label: { color: 'red', empty: true, circular: true },
  },
]

class TasksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      color: null
    };
  }

  handleSave(){
    const day_string = dateFns.format(this.props.date, 'dd-MM-yyyy')
    this.props.addTask(
      day_string,
      {
        content: this.state.value,
        color: this.state.color,
      }
    )
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleColorChange(event, data) {
    this.setState({color: data.value});
  }

  render() {
    return (
      <div>
        <textarea class='task-input' rows='10' placeholder="Event description ..." value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <br/>
        <Dropdown
          inline
          label
          options={colorOptions}
          defaultValue={colorOptions[0].value}
          onChange={this.handleColorChange.bind(this)}
        />
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
