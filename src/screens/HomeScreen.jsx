import React from 'react';
import ReactDOM from "react-dom";

import Calendar from "../components/calendar";
import AddNoteButton from "../components/buttons/add_note_button";
import TasksList from "../components/tasks_list";
import Menu from "../components/menu";
import { connect } from 'react-redux';
import * as dateFns from "date-fns";

class HomeScreen extends React.Component {

  render() {
    return (
      <div class="homescreen" style={{display: 'flex', alignItems: 'stretch', height: '100%'}}>
        <Calendar style={{flex: 2}}/>
        <div class="details">
          <div class="header">
            <div class="date">
              {dateFns.format(this.props.date, 'dd-MM-yyyy')}
            </div>
            <AddNoteButton/>
          </div>
          <TasksList/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  console.log(state)
  return {
    date: state.date
  }
}

export default connect(mapStateToProps)(HomeScreen);
