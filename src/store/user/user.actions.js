import { createAction } from "redux-actions";

export const UserActionsType = {
  REGISTER: 'REGISTER',
  LOGIN: 'LOGIN_USER',
  LOGOUT: 'LOGOUT',
};

export const UserAction = {
  register: createAction(UserActionsType.REGISTER),
  login: createAction(UserActionsType.LOGIN),
  logout: createAction(UserActionsType.LOGOUT),
}
