import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/Action/Action";

const Counter = () => {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();
    
    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement());
    }
    const handleReset = () =>{
        dispatch(reset())
    }
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleIncrement} className="btn btn-primary">Increment</button>
      <button onClick={handleDecrement} className="btn btn-primary">Decrement</button>
      <button onClick={handleReset} className="btn btn-primary">Reset</button>
    </div>
  )
};

export default Counter;
