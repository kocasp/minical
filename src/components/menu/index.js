import React from "react";
import { NavLink } from "react-router-dom";
class Menu extends React.Component {

  render() {
    return (
      <div class="menu">
        <NavLink to="/">
          <div class="menu_button">
            <div className="icon" onClick={this.prevMonth}>
              event
            </div>
          </div>
        </NavLink>
        <NavLink to="/settings/">
          <div class="menu_button">
            <div className="icon" onClick={this.prevMonth}>
              fingerprint
            </div>
          </div>
        </NavLink>
      </div>
    );
  }

}

export default Menu;
