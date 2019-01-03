import { LoaderActionType } from './loader.actions';
import { handleActions } from 'redux-actions';

const initialState = {
  visibility: false
}

export const setLoaderReducer = (state, action) => {
  if (action.payload) {
    return {
      ...state,
      visibility: action.payload
    }
  }
  return state
}

export const loaderReducer = handleActions({
  [LoaderActionType.SET_VISIBILITY]: setLoaderReducer
},
  initialState
)