import React from "react";
import * as dateFns from "date-fns";
import { connect } from 'react-redux';
import * as actions from "../../actions";
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom'
// import { pl } from 'date-fns/locale'

class Calendar extends React.Component {
  state = {
    currentMonth: this.props.date,
    selectedDate: this.props.date
  };

  cal_options = {
    weekStartsOn: 1,
    // locale: pl,
  }

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat, this.cal_options)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "EEE";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth, this.cal_options);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat, this.cal_options)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  cellTask(color, content){
    return (
      <div class="cell_task">
        <div className="icon" style={{color: color || '#FFA144'}}>
          fiber_manual_record
        </div>
        {content.substring(0,8)+".."}
      </div>
    )
  }

  renderCellTasks(day_string) {
    if (this.props.calendar[day_string] && this.props.calendar[day_string].tasks){
      return (
        this.props.calendar[day_string].tasks.slice(0,5).map((task, index) => {
          return this.cellTask(task.color, task.content)
        })
      );
    } else {
      return null;
    }
  }

  renderLabel(day_string, label_name){
    if (!this.props.calendar[day_string] || !this.props.calendar[day_string].labels) {
      return null;
    }
    if(this.props.calendar[day_string].labels.includes(label_name)){
      return(
        <div className={"cell-label icon " + label_name}>
          {label_name}
        </div>
      )
    }
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth, this.cal_options);
    const monthEnd = dateFns.endOfMonth(monthStart, this.cal_options);
    const startDate = dateFns.startOfWeek(monthStart, this.cal_options);
    const endDate = dateFns.endOfWeek(monthEnd, this.cal_options);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        const day_string = dateFns.format(day, 'dd-MM-yyyy')
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => {this.onDateClick(cloneDay)}}
          >
            {this.renderCellTasks.bind(this)(day_string)}
            <span className={"number "+((day_string == dateFns.format(new Date(), 'dd-MM-yyyy')) ? 'today' : '')}>{formattedDate}</span>
            {this.renderLabel(day_string, 'warning')}
            {this.renderLabel(day_string, 'school')}
            {this.renderLabel(day_string, 'cake')}
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
    this.props.pickDate(day);
    this.props.history.push('/home');
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    date: state.date,
    calendar: state.calendar
  }
}

export default withRouter(connect(mapStateToProps, actions)(Calendar));
