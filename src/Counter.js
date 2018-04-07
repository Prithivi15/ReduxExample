import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6

class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;
