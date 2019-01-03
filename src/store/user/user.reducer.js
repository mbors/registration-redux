import { handleActions } from 'redux-actions';
//import { User } from './User.model';
import { UserAction } from './user.actions';

const initialState = {
  email: '',
  password: ''
}


export const SaveUserReducer = (state, action) => {
  if (action.payload) {
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password
    };
  }
  console.log('saveuserreducer ', state, action)
  return state
}


export const userReducer = handleActions(
  {
    [UserAction.REGISTER]: SaveUserReducer,
  },
  initialState
);