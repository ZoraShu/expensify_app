import React from 'react';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates';
import { setTextFilter,sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filters';
//class 里的内容都要用this
//stateless functiom 不需要

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }; 
  onSortByChange = (e) => {
    if (e.target.value === 'amount') {
      this.props.sortByAmount();
    } else if (e.target.value === 'date'){
      this.props.sortByDate();
    }
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.setEndDate(endDate);
    this.props.setStartDate(startDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}));
  };
  render() {
    return (
      <div>
        <input 
        type="text" 
        value={this.props.filters.text} 
        onChange={this.onTextChange} 
        />
        <select 
        value={this.props.filters.sortBy} 
        onChange={this.onSortByChange}>

          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false}
          numberOfMonths={1}
          showClearDates={true}
        />
      </div>
    );
  }
}
//onChange take a function
//everytime input changes, the function fires

//controlled input -> controlled by javascript


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter : (text) => dispatch.setTextFilter(text),
  sortByAmount :() => dispatch.sortByAmount(),
  sortByDate: () => dispatch.sortByDate(),
  setStartDate: (startDate) => dispatch.setStartDate(startDate),
  setEndDate: (endDate) => dispatch.setEndDate(endDate)

})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
