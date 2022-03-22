import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  counterSlice as counter,
  selectCount,
} from './counterSlice';
import './Counter.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row">
        <span className="value">{count >= 0 ? "+" : ""}{count}</span>
      </div>
      <div className="row">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(counter.actions.decrement())}
        >
          -
        </button>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(counter.actions.increment())}
        >
          +
        </button>
      </div>
      <div className="row">
        <button
          className="submit-button"
          aria-label="Decrement value"
          onClick={() => dispatch(counter.actions.setCurrentValue(count))}
        >
          { count >= 0 ? "Fire!" : "Take the hit!" }
        </button>
      </div>

      
    </div>
  );
}
