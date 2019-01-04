import { createAction } from "redux-actions";

export const UserActionsType = {
  REGISTER: 'REGISTER',
  SAVE: 'SAVE',
  LOGOUT: 'LOGOUT',
};

export const UserAction = {
  register: createAction(UserActionsType.REGISTER),
  save: createAction(UserActionsType.SAVE),
  logout: createAction(UserActionsType.LOGOUT),
}
