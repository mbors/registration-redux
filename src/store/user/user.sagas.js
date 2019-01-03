// import { User } from './User.model'
// import { Action } from 'redux-actions'
import { takeLatest, put } from 'redux-saga/effects';
import { UserActionsType, UserAction } from './user.actions';
import { LoaderAction } from '../../components/Loader/redux/loader.actions'
import { MessageAction } from '../../components/Message/redux/message.actions';

export function* saveUser(action) {
  yield put(MessageAction.setMessage(''))
  if (!action.payload) {
    return
  }


  //simple validation 
  if (!action.payload.email.includes('@') && action.payload.password.length === 0) {
    yield put(MessageAction.setMessage('Invalid email & invalid password'))
    return    
  } else if (!action.payload.email.includes('@') && action.payload.password.length !== 0) {
    yield put(MessageAction.setMessage('Invalid email'))
    return
  } else if (action.payload.email.includes('@') && action.payload.password.length === 0) {
    yield put(MessageAction.setMessage('Invalid password' ))
    return
  }



  yield put(LoaderAction.setVisibility(true))
  const success = yield new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random() > 0.7 ? true : false)
    }, 2000);
  })

  yield put(LoaderAction.setVisibility(false))

  if (success) {
    yield put(UserAction.register(action.payload))
  } else {
    yield put(MessageAction.setMessage('Connection error'))
  }

}

export default function* () {
  yield takeLatest(UserActionsType.REGISTER, saveUser);
}