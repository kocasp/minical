import React from "react";
import { connect } from 'react-redux';
import Task from "./task";
import * as dateFns from "date-fns";


class TasksList extends React.Component {

  render() {
    const day_string = dateFns.format(this.props.date, 'dd-MM-yyyy')
    if (this.props.calendar[day_string]){
      return (
        this.props.calendar[day_string].tasks.map((task, index) => {
          return <div><Task key={index} day_string={day_string} content={task.content} color={task.color} />{this.props.labels}</div>
        })
      );
    } else {
      return null;
    }
  }

}

const mapStateToProps = function(state) {
  return {
    calendar: state.calendar,
    date: state.date
  }
}

export default connect(mapStateToProps)(TasksList);
