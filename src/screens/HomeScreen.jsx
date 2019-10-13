import React from 'react';

import Calendar from "../components/calendar";
import AddNoteButton from "../components/buttons/add_note_button";
import TasksList from "../components/tasks_list";
import TasksForm from "../components/tasks_form";
import Labels from "../components/labels";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
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
            <Labels day_string={dateFns.format(this.props.date, 'dd-MM-yyyy')} />
            <NavLink to="/home/new">
              <AddNoteButton/>
            </NavLink>
          </div>
          <Route path="/home/" exact component={TasksList} />
          <Route path="/home/new" component={TasksForm} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    date: state.date
  }
}

export default connect(mapStateToProps)(HomeScreen);
