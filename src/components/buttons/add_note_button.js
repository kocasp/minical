import React from "react";
import * as dateFns from "date-fns";
// import { pl } from 'date-fns/locale'

class AddNoteButton extends React.Component {

  render() {
    return (
      <div className="small_button" onClick={this.prevMonth}>
        +
      </div>
    );
  }

}

export default AddNoteButton;
