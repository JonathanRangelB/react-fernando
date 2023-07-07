import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    setCounter(counter + 1)
  };
  const handleReset = () => {
    setCounter(value)
  };
  const handleRest = () => {
    setCounter(counter - 1)
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h1> {counter} </h1>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRest}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
