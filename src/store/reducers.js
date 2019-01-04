import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { messageReducer } from "../components/Message/redux/message.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer, 
});
