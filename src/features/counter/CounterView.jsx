import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./CounterSlice";

const CounterView = () => {
  const count = useSelector((state)=> state.counter.count);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=> dispatch(increment())} className="btn btn-primary">Increment</button>
      <button className="btn btn-primary">Decrement</button>
      <button className="btn btn-primary">Reset</button>
    </div>
  )
};

export default CounterView;
