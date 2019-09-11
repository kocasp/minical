import React from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

import Calendar from "./components/Calendar";

class App extends React.Component {

  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };
  
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              mini<b>sini</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
