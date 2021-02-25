import { createStore } from 'redux';
import { attendeeList } from './data/AttendeeList';

function reducer(state = [], action) {
  return state;
};

const store = createStore(reducer, attendeeList)

export default store