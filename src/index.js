import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import counterReducer from "./counterReducer";
import Counter from "./Counter";
import { createStore } from "redux";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const store = createStore(counterReducer);

const App = () => (
  <div style={styles}>
    <Hello name="Counter" />
    <Counter
      value={store.getState()}
      onIncrement={() => {
        store.dispatch({ type: "INCREMENT" });
      }}
      onDecrement={() => {
        store.dispatch({ type: "DECREMENT" });
      }}
    />
  </div>
);

render(<App />, document.getElementById("root"));

const renderView = () => {
  render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    document.getElementById("root")
  );
};
renderView();
store.subscribe(renderView);
