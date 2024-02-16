import { useReducer } from 'react';
import Reducer from './Reducer';

function Counter() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default Counter;
