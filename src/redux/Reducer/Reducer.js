import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "../Constant/Constant";


const initialState = { 
    isLoading : false,
    todos : [],
    error: null
}
const counterReducer = (state=initialState, action) => {
switch(action.type){
    case GET_TODO_REQUEST :
        return {
            ...state,
            isLoading : true,
        }
    case GET_TODO_SUCCESS :
        return {
            ...state,
            todos :  action.payload,
            isLoading : false,
            error: null
        }
    case GET_TODO_FAILED :
        return {
            ...state,  
            isLoading : false,
            todos : [],
            error: action.payload,
        }
        
    default :
     return state;
}
}

export default counterReducer;