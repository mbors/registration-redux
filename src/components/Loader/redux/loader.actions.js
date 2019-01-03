import { createAction } from "redux-actions";

export const LoaderActionType = {
    SET_VISIBILITY: 'SET_VISIBILITY'
}

export const LoaderAction = {
  setVisibility: createAction(LoaderActionType.SET_VISIBILITY)
}