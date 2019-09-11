import React from 'react';
import ReactDOM from "react-dom";

import Calendar from "../components/Calendar";

class HomeScreen extends React.Component {

  render() {
    return (
      <div class="homescreen" style={{display: 'flex'}}>
        <Calendar style={{flex: 2}}/>
        <div class="details" style={{flex: 1}}>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
