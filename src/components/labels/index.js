import React from "react";
import { connect } from 'react-redux';
import * as actions from "../../actions";

class Labels extends React.Component {

  addLabel(label){
    this.props.addLabel(this.props.day_string, label)
  }

  removeLabel(label){
    this.props.removeLabel(this.props.day_string, label)
  }

  renderLabel(label){
    if (!this.props.calendar[this.props.day_string] || !this.props.calendar[this.props.day_string].labels) {
      return(
        <div onClick={() => {this.addLabel.bind(this)(label)}} className={"label icon disabled "+label}>
          {label}
        </div>
      )
    }
    if(this.props.calendar[this.props.day_string].labels.includes(label)){
      return(
        <div onClick={() => {this.removeLabel.bind(this)(label)}} className={"label icon "+label}>
          {label}
        </div>
      )
    } else {
      return(
        <div onClick={() => {this.addLabel.bind(this)(label)}} className={"label icon disabled "+label}>
          {label}
        </div>
      )
    }
  }

  render() {
    return (
      <div class="labels">
        {this.renderLabel('warning')}
        {this.renderLabel('school')}
        {this.renderLabel('cake')}
      </div>
    );
  }

}

const mapStateToProps = function(state) {
  return {
    calendar: state.calendar
  }
}

export default connect(mapStateToProps, actions)(Labels);
