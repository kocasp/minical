import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { store } from "./store";
import { Provider } from 'react-redux'

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Menu from "./components/menu";
import Intro from "./components/intro";

class App extends React.Component {

  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  render() {
    return (
      <Provider store={store}>
        <Intro>
          <Router>
            <div className="App">
              <main>
                <div class='main_container'>
                  <Menu/>
                  <Redirect exact from='/' to='/home/' />
                  <Route path="/home/" exact component={HomeScreen} />
                  <Route path="/settings/" component={SettingsScreen} />
                </div>
              </main>
            </div>
          </Router>
        </Intro>
      </Provider>
    );
  }
}

export default App;
