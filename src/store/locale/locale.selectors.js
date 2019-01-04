import get from 'lodash/get'
import reducers from './locale.reducers'

export const getLocale = state => get(state, `${reducers.STATE_KEY}.code`)