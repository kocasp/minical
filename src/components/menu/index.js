import React from "react";

class Menu extends React.Component {

  render() {
    return (
      <div class="menu">
        <div class="menu_button">
          <div className="icon" onClick={this.prevMonth}>
            event
          </div>
        </div>
        <div class="menu_button">
          <div className="icon" onClick={this.prevMonth}>
            fingerprint
          </div>
        </div>
      </div>
    );
  }

}

export default Menu;
