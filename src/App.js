import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import logo from './logo.svg';
import { store, persistor } from "./store";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Menu from "./components/menu";
import Intro from "./components/intro";
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends React.Component {

  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  render() {
    return (
      <Provider store={store}>
        <Intro>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <div className="App">
                <main>
                  <div class='main_container'>
                    <Menu/>
                    <Redirect exact from='/' to='/home/' />
                    <Route path="/home/" component={HomeScreen} />
                    <Route path="/settings/" component={SettingsScreen} />
                  </div>
                </main>
              </div>
            </Router>
          </PersistGate>
        </Intro>
      </Provider>
    );
  }
}

export default App;
