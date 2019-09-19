import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

class App extends React.Component {

  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  render() {
    return (
      <Router>
        <div className="App">
          <main>
            <Route path="/home/" exact component={HomeScreen} />
            <Route path="/settings/" component={SettingsScreen} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
