import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './actions/actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      { isLogged ? <h2>Hi there, I'm logged in</h2> : <h2>Hi there, please login</h2> }
    </div>
  )
}

export default App;
