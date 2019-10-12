import React from "react";

class Button extends React.Component {

  render() {
    return (
      <button class={"button "+this.props.type} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }

}

export default Button;
