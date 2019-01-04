import reducers from './locale.reducers'

const stateFromStorage = storage => ({
  code: storage.code
})

const storageFromState = state => ({
  code: state.code
})

export default {
  STATE_KEY: reducers.STATE_KEY,
  stateFromStorage,
  storageFromState
}