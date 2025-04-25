import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByFive, reset } from "./CounterSlice";

const CounterView = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>dispatch(increment()) } className="btn btn-primary">+</button>
      <button onClick={()=>dispatch(decrement()) } className="btn btn-primary">-</button>
      <button onClick={()=>dispatch(reset()) } className="btn btn-primary">0</button>
      <button onClick={()=>dispatch(incrementByFive(5)) } className="btn btn-primary">5</button>
    </div>
  )
};

export default CounterView;
