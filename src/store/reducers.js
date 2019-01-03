import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { messageReducer } from "../components/Message/redux/message.reducer";
import { loaderReducer } from "../components/Loader/redux/loader.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer, 
  loader: loaderReducer,
});
