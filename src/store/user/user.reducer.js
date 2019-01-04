import { handleActions } from 'redux-actions';
//import { User } from './User.model';
import { UserActionsType } from './user.actions';

const initialState = {
  email: '',
  password: ''
}


export const SaveUserReducer = (state, action) => {
  if (action.payload) {
    localStorage.setItem('user', JSON.stringify({ email: action.payload.email, password: action.payload.password }));
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password
    }
  }
  return state
}

export const RemoveUser = (state, action) => {
  if (action.payload) {
    localStorage.clear();
    return {

    }
  }
  return state
}


export const userReducer = handleActions(
  {
    [UserActionsType.SAVE]: SaveUserReducer,
    [UserActionsType.LOGOUT] : RemoveUser,
  },
  initialState
);