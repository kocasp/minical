import React from "react";
import { NavLink } from "react-router-dom";

function MenuButton(props) {
  return (
    <NavLink to={props.path}>
      <div class="menu_button">
        <div className="icon">
          {props.icon}
        </div>
      </div>
    </NavLink>
  )
}
class Menu extends React.Component {

  render() {
    return (
      <div class="minical-menu">
        <MenuButton path='/home/' icon='event'/>
        <MenuButton path='/settings/' icon='fingerprint'/>
      </div>
    );
  }

}

export default Menu;
