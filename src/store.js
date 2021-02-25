import { createStore } from 'redux'
import reducer from './Reducer';
import App from './App';
import actions from './Actions';

const AppContainer = connect(
  function mapStateToProps(state) {
      return {
          attendees: state
      };
  },
  function mapDispatchToProps(dispatch) {
      return bindActionCreators(actions, dispatch);
  }
)(App);

// createStore(reducer, defaultState);
const store = createStore(reducer, attendeeList);

export default AppContainer;