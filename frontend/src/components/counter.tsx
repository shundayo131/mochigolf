import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store'; // Import types for state and dispatch.
import { increment, decrement, setCount } from '../features/test/counterSlice'; // Import actions.

const Counter: React.FC = () => {
  // Access the current count value from the Redux store.
  const count = useSelector((state: RootState) => state.counter.count);

  // Get the dispatch function to send actions to the store.
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button> {/* Dispatches 'counter/increment' */}
      <button onClick={() => dispatch(decrement())}>Decrement</button> {/* Dispatches 'counter/decrement' */}
      <button onClick={() => dispatch(setCount(10))}>Set Count to 10</button> {/* Dispatches 'counter/setCount' */}
    </div>
  );
};

export default Counter;
