import React from 'react';
import ReactDOM from "react-dom";

import Calendar from "../components/calendar";
import AddNoteButton from "../components/buttons/add_note_button";

class HomeScreen extends React.Component {

  render() {
    return (
      <div class="homescreen" style={{display: 'flex', alignItems: 'stretch', height: '100%'}}>
        <Calendar style={{flex: 2}}/>
        <div class="details">
          <div class="header">
            <div class="date">
              12.09.2019
            </div>
            <AddNoteButton/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
