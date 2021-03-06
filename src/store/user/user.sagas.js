// import { User } from './User.model'
// import { Action } from 'redux-actions'
import { takeLatest, put } from 'redux-saga/effects';
import { UserActionsType, UserAction } from './user.actions';
import { MessageAction } from '../../components/Message/redux/message.actions';

export function* saveUser(action) {
  yield put(MessageAction.setMessage(' '))
  if (!action.payload) {
    return
  }

  //simple validation 
  if (!action.payload.email.includes('@')) {
    yield put(MessageAction.setMessage('Invalid email'))
    return
  }
  if (action.payload.password === '') {
    yield put(MessageAction.setMessage('Invalid password'))
    return
  }
  yield put(UserAction.save(action.payload))
}

export default function* () {
  yield takeLatest(UserActionsType.REGISTER, saveUser);
}