import { createAction } from "redux-actions";

export const MessageActionType = {
    SET_MESSAGE: 'SET_MESSAGE'
}

export const MessageAction = {
  setMessage: createAction(MessageActionType.SET_MESSAGE),
}

