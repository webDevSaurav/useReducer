import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reduce = (state, actions) => {
  switch (actions.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + actions.value };
    case ACTIONS.DECREMENT:
      return { count: state.count - actions.value };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reduce, { count: 0 });

  const incrementHandler = (step) => {
    dispatch({
      type: ACTIONS.INCREMENT,
      value: step,
    });
  };

  const decrementHandler = (step) => {
    dispatch({
      type: ACTIONS.DECREMENT,
      value: step,
    });
  };

  return (
    <React.Fragment>
      <button onClick={incrementHandler.bind(null, 2)}>+</button>
      <button onClick={decrementHandler.bind(null, 2)}>-</button>
      <p>{state.count}</p>
    </React.Fragment>
  );
};

export default Counter;
