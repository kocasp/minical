import React from "react";
import * as actions from "../../actions";
import { connect } from 'react-redux';

class Task extends React.Component {

  truncateText(text) {
    if (text.length > 200){
      return text.substring(0,200) + "..."
    }
    else {
      return text
    }
  }

  handleRemoveClick(){
    this.props.removeTask(this.props.day_string, this.props.index)
  }

  render() {
    return (
      <div className="task_container" onClick={this.prevMonth}>
        <div class="stripe" style={{backgroundColor: this.props.color}}>
        </div>
        <div class="content">
          {this.truncateText(this.props.content)}
        </div>
        <button class="remove" onClick={this.handleRemoveClick.bind(this)}>
          <div className="icon remove">
            clear
          </div>
        </button>
      </div>
    );
  }

}

export default connect(null, actions)(Task);
