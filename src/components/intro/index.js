import React from "react";
import ReactPlayer from 'react-player'
import { connect } from 'react-redux';
import * as actions from "../../actions";

class Intro extends React.Component {

  videoEndedCallback() {
    this.props.setIntroPlayed()
  }

  render() {

    if (this.props.intro_played == false) {
      return (
        <div class="intro">
          <ReactPlayer url='/intro.mp4' playing muted onEnded={this.videoEndedCallback.bind(this)}/>
        </div>
      );
    } else {
      return (
        this.props.children
      )
    }
  }

}

const mapStateToProps = function(state) {
  console.log(state)
  return {
    intro_played: state.intro_played
  }
}

export default connect(mapStateToProps, actions)(Intro);
