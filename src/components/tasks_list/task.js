import React from "react";

class Task extends React.Component {

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
        <div class="stripe" style={{backgroundColor: this.props.color}}>
        </div>
        <div class="content">
          {this.truncateText(this.props.content)}
        </div>
      </div>
    );
  }

}

export default Task;
