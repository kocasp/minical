import React from 'react';
import ReactDOM from "react-dom";

import Calendar from "../components/calendar";
import AddNoteButton from "../components/buttons/add_note_button";
import TasksList from "../components/tasks_list";

class SettingsScreen extends React.Component {

  render() {
    return (
      <div class="settingsscreen" style={{display: 'flex', alignItems: 'stretch', height: '100%'}}>
        Settings
      </div>
    );
  }
}

export default SettingsScreen;
