import axios from "axios";
import {
  GET_TODO_FAILED,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "../Constant/Constant";

export const allTodoActions = () => async (dispatch) => {

  dispatch({ type: GET_TODO_REQUEST });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({ type: GET_TODO_SUCCESS, payload: response.data });
    
  } catch (error) {
    dispatch({ type: GET_TODO_FAILED, payload: error.message });
  }
};
