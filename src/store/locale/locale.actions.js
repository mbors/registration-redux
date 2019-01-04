import {decoreAction} from '../decorators'

export const setLocale = decoreAction((locale) => ({ 
  type: 'SET_LOCALE',
  payload: locale
}))