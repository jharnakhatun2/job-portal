import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../util/Loader/Loader";
import { allTodoActions } from "../../redux/Action/Action";

const Counter = () => {
  const stateData = useSelector(state => state.todos);
console.log(stateData);
const { isLoading, todos, error } = stateData;
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(allTodoActions())
  },[])

  if(isLoading){
    return <Loader/>
  }

  if(error) { 
    return <h1>An error is occured !!!</h1>
  }
  return (
    <div>
      {todos && todos.map( todo => {
        return  <div key={todo.id}>
          <h1>{todo.title}</h1>
        </div>
      })}
    </div>
  )
};

export default Counter;
