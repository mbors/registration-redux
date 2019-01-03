import { MessageActionType } from './message.actions';
import { handleActions } from 'redux-actions';

const initialState = {
  content: ''
}

export const setMessageReducer = (state, action) => {
  if(action.payload){
    return{
      ...state, 
      content: action.payload
    }
  }
  return state  
}

export const messageReducer = handleActions({
  [MessageActionType.SET_MESSAGE]: setMessageReducer
},
initialState
)
