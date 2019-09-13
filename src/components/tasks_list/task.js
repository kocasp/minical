import React from "react";

class Task extends React.Component {

  state = {
    id: null,
    content: "",
    color: ""
  }

  constructor (props) {
    super();
    const { content, color } = props;
    this.state = {content, color};
  }

  truncateText(text) {
    if (text.length > 200){
      return text.substring(0,200) + "..."
    }
    else {
      return text
    }
  }

  render() {
    return (
      <div className="task_container" onClick={this.prevMonth}>
        <div class="stripe" style={{backgroundColor: this.state.color}}>
        </div>
        <div class="content">
          {this.truncateText(this.state.content)}
        </div>
      </div>
    );
  }

}

export default Task;
