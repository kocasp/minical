import React from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

import HomeScreen from "./screens/HomeScreen";

class App extends React.Component {

  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  render() {
    return (
      <div className="App">
        <main>
          <HomeScreen />
        </main>
      </div>
    );
  }
}

export default App;
