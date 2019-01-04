// import { User } from './User.model'
// import { Action } from 'redux-actions'
import { takeLatest, put } from 'redux-saga/effects';
import { UserActionsType, UserAction } from './user.actions';
import { MessageAction } from '../../components/Message/redux/message.actions';

export function* saveUser(action) {
  yield put(MessageAction.setMessage(''))
  if (!action.payload) {
    return
  }

  //simple validation 
  if (!action.payload.email.includes('@') && action.payload.password) {
    yield put(MessageAction.setMessage('Invalid email & invalid password'))
    return
  } else if (!action.payload.email.includes('@') && !action.payload.password) {
    yield put(MessageAction.setMessage('Invalid email'))
    return
  } else if (action.payload.email.includes('@') && !action.payload.password) {
    yield put(MessageAction.setMessage('Invalid password'))
    return
  }

  yield put(UserAction.save(action.payload))
  //set user to be listened from the user reducer
  //there are two actions: one is listened by the saga, another one is thrown by the saga when the 
  //saga ends
}

export default function* () {
  yield takeLatest(UserActionsType.REGISTER, saveUser);
}