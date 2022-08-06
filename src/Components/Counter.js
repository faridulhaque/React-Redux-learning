import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  counterDecrement,
  counterIncrement,
} from "../ReduxWork/Actions/CounterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterIncrement());
  };

  return (
    <div>
      <h2>Counter app</h2>
      <br />
      <button onClick={handleIncrement}>Increment</button>{" "}
      <h3>Count: {count}</h3>{" "}
      <button onClick={(e) => dispatch(counterDecrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
