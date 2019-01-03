import { handleActions } from 'redux-actions';
//import { User } from './User.model';
import { UserActionsType } from './user.actions';

const localStorageUser = localStorage.getItem('user')

const initialState = localStorageUser ? localStorageUser : {
  email: '',
  password: ''
}


export const SaveUserReducer = (state, action) => {
  if (action.payload) {
    localStorage.setItem('user', { email: action.payload.email, password: action.payload.password });
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password
    }
  }
  return state
}


export const userReducer = handleActions(
  {
    [UserActionsType.REGISTER_USER]: SaveUserReducer,
  },
  initialState
);