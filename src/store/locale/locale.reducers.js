import { handleActions } from 'redux-actions'
import * as actions from './locale.actions'
import translation from '../../../translation'

const LOCALES = Object.keys(translation)

export const DEFAULT_STATE = {
  code: LOCALES[0]
}

export const setLocale = (state, { payload }) => {
  if (LOCALES.indexOf(payload) === -1)
    return state
  
  return {
    code: payload
  }
}

const reducers = handleActions(
  {
    [actions.setLocale.type]: setLocale
  },
  DEFAULT_STATE
)

export default {
  STATE_KEY: 'locale',
  reducers
}